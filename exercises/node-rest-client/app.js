const express = require('express');
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

const app = express();
const port = 3000;

// =========================
// Utility Functions
// =========================
function parseDate(str) {
    const [day, month, year] = str.split('-').map(Number);
    return new Date(year, month - 1, day);
}

function diffDays(date1, date2) {
    const msPerDay = 1000 * 60 * 60 * 24;
    return Math.abs(Math.round((date2 - date1) / msPerDay));
}

// =========================
// Basic Endpoints
// =========================
// Hello Endpoint
app.get('/hello', (req, res) => {
    const key = req.query.key;
    if (!key) {
        return res.status(400).json({ error: 'Missing key parameter' });
    }
    if (key === 'world') {
        return res.status(200).json({ message: 'Hello, world!' });
    }
    return res.status(200).json({ message: `Hello, ${key}!` });
});

// Dates Comparison
app.get('/diffdates', (req, res) => {
    const { date1, date2 } = req.query;
    if (!date1 || !date2) {
        return res.status(400).json({ error: 'Missing date parameters' });
    }
    const dateRegex = /^\d{2}-\d{2}-\d{4}$/;
    if (!dateRegex.test(date1) || !dateRegex.test(date2)) {
        return res.status(400).json({ error: 'Invalid date format. Use dd-MM-yyyy.' });
    }
    const d1 = parseDate(date1);
    const d2 = parseDate(date2);
    if (isNaN(d1.getTime()) || isNaN(d2.getTime())) {
        return res.status(400).json({ error: 'Invalid date format. Use dd-MM-yyyy.' });
    }
    const diff = diffDays(d1, d2);
    return res.status(200).json({ days: diff });
});

// =========================
// Validation Endpoints
// =========================
// Spanish Phone Validation
app.get('/validate-phone', (req, res) => {
    const { phone } = req.query;
    if (!phone) {
        return res.status(400).json({ error: 'Missing phone parameter' });
    }
    const phoneRegex = /^\+34[679]\d{8}$/;
    const valid = phoneRegex.test(phone);
    return res.status(200).json({ valid });
});

// Spanish DNI Validation
app.get('/validate-dni', (req, res) => {
    const { dni } = req.query;
    if (!dni) {
        return res.status(400).json({ error: 'Missing dni parameter' });
    }
    const dniRegex = /^\d{8}[A-Za-z]$/;
    const valid = dniRegex.test(dni);
    return res.status(200).json({ valid });
});

// =========================
// Conversion & External API
// =========================
// Color to Hex Conversion
app.get('/color-hex', (req, res) => {
    const { name } = req.query;
    if (!name) {
        return res.status(400).json({ error: 'Missing color name' });
    }
    const colorsPath = path.join(__dirname, '../Resources/colors.json');
    if (!fs.existsSync(colorsPath)) {
        return res.status(500).json({ error: 'Colors file not found' });
    }
    const colors = JSON.parse(fs.readFileSync(colorsPath, 'utf8'));
    const hex = colors[name.toLowerCase()];
    if (!hex) {
        return res.status(404).json({ error: 'Color not found' });
    }
    return res.status(200).json({ hex });
});

// Chuck Norris Jokes
app.get('/chuck-norris', async (req, res) => {
    try {
        const response = await axios.get('https://api.chucknorris.io/jokes/random');
        return res.status(200).json({ joke: response.data.value });
    } catch (err) {
        return res.status(500).json({ error: 'Failed to fetch joke' });
    }
});

// =========================
// Utility Endpoints
// =========================
// URL Parsing
app.get('/parse-url', (req, res) => {
    const { url } = req.query;
    if (!url) {
        return res.status(400).json({ error: 'Missing url parameter' });
    }
    try {
        const parsed = new URL(url);
        const queryParams = {};
        parsed.searchParams.forEach((value, key) => {
            queryParams[key] = value;
        });
        return res.status(200).json({
            protocol: parsed.protocol.replace(':',''),
            host: parsed.hostname,
            port: parsed.port || null,
            path: parsed.pathname,
            query: queryParams
        });
    } catch (err) {
        return res.status(400).json({ error: 'Invalid URL' });
    }
});

// List Files and Folders
app.get('/list-files', (req, res) => {
    const { path: dirPath } = req.query;
    if (!dirPath) {
        return res.status(400).json({ error: 'Missing path parameter' });
    }
    try {
        const absPath = path.resolve(dirPath);
        if (!fs.existsSync(absPath)) {
            return res.status(404).json({ error: 'Path not found' });
        }
        const items = fs.readdirSync(absPath, { withFileTypes: true });
        const files = items.filter(i => i.isFile()).map(i => i.name);
        const folders = items.filter(i => i.isDirectory()).map(i => i.name);
        return res.status(200).json({ files, folders });
    } catch (err) {
        return res.status(500).json({ error: 'Failed to list files/folders' });
    }
});

// Word Counting
app.get('/count-word', (req, res) => {
    const { file, word } = req.query;
    if (!file || !word) {
        return res.status(400).json({ error: 'Missing file or word parameter' });
    }
    try {
        const absPath = path.resolve(file);
        if (!fs.existsSync(absPath)) {
            return res.status(404).json({ error: 'File not found' });
        }
        const content = fs.readFileSync(absPath, 'utf8');
        const regex = new RegExp(`\\b${word}\\b`, 'gi');
        const matches = content.match(regex);
        const count = matches ? matches.length : 0;
        return res.status(200).json({ count });
    } catch (err) {
        return res.status(500).json({ error: 'Failed to count word' });
    }
});

// =========================
// File Operations
// =========================
// Folder Zipping
app.get('/zip-folder', (req, res) => {
    const { path: dirPath } = req.query;
    if (!dirPath) {
        return res.status(400).json({ error: 'Missing path parameter' });
    }
    const absPath = path.resolve(dirPath);
    if (!fs.existsSync(absPath) || !fs.lstatSync(absPath).isDirectory()) {
        return res.status(404).json({ error: 'Folder not found' });
    }
    res.set({
        'Content-Type': 'application/zip',
        'Content-Disposition': `attachment; filename="${path.basename(absPath)}.zip"`
    });
    const archive = archiver('zip', { zlib: { level: 9 } });
    archive.directory(absPath, false);
    archive.on('error', err => res.status(500).json({ error: 'Failed to zip folder' }));
    archive.pipe(res);
    archive.finalize();
});

// =========================
// Password Generator
// =========================
app.get('/generate-password', (req, res) => {
    const length = parseInt(req.query.length) || 12;
    const useUpper = req.query.uppercase === 'true';
    const useLower = req.query.lowercase === 'true';
    const useNumbers = req.query.numbers === 'true';
    const useSymbols = req.query.symbols === 'true';
    if (!useUpper && !useLower && !useNumbers && !useSymbols) {
        return res.status(400).json({ error: 'At least one character type must be selected' });
    }
    let chars = '';
    if (useUpper) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (useLower) chars += 'abcdefghijklmnopqrstuvwxyz';
    if (useNumbers) chars += '0123456789';
    if (useSymbols) chars += '!@#$%^&*()_+-=[]{}|;:,.<>?';
    let password = '';
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return res.status(200).json({ password });
});

// =========================
// Start Server
// =========================
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

module.exports = app;
