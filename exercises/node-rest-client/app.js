const express = require('express');
const app = express();
const port = 3000;

function parseDate(str) {
    const [day, month, year] = str.split('-').map(Number);
    return new Date(year, month - 1, day);
}

function diffDays(date1, date2) {
    const msPerDay = 1000 * 60 * 60 * 24;
    return Math.abs(Math.round((date2 - date1) / msPerDay));
}

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

app.get('/diffdates', (req, res) => {
    const { date1, date2 } = req.query;
    if (!date1 || !date2) {
        return res.status(400).json({ error: 'Missing date parameters' });
    }
    // Validate format: dd-MM-yyyy
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

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

module.exports = app;
