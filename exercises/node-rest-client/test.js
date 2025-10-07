const request = require('supertest');
const app = require('./app');
const fs = require('fs');
const path = require('path');

// =========================
// Basic Endpoints Tests
// =========================
describe('GET /hello', () => {
    it('should return Hello, world! when key=world', async () => {
        const res = await request(app).get('/hello?key=world');
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ message: 'Hello, world!' });
    });

    it('should return Hello, <key>! for other keys', async () => {
        const res = await request(app).get('/hello?key=test');
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ message: 'Hello, test!' });
    });

    it('should return 400 if no key is provided', async () => {
        const res = await request(app).get('/hello');
        expect(res.statusCode).toBe(400);
        expect(res.body).toEqual({ error: 'Missing key parameter' });
    });
});

describe('GET /diffdates', () => {
    it('should return the difference in days for valid dates', async () => {
        const res = await request(app).get('/diffdates?date1=01-10-2025&date2=07-10-2025');
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ days: 6 });
    });

    it('should return 0 if dates are the same', async () => {
        const res = await request(app).get('/diffdates?date1=07-10-2025&date2=07-10-2025');
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ days: 0 });
    });

    it('should return 400 if a date is missing', async () => {
        const res = await request(app).get('/diffdates?date1=01-10-2025');
        expect(res.statusCode).toBe(400);
        expect(res.body).toEqual({ error: 'Missing date parameters' });
    });

    it('should return 400 for invalid date format', async () => {
        const res = await request(app).get('/diffdates?date1=2025-10-01&date2=2025-10-07');
        expect(res.statusCode).toBe(400);
        expect(res.body).toEqual({ error: 'Invalid date format. Use dd-MM-yyyy.' });
    });
});

// =========================
// Validation Endpoints Tests
// =========================
describe('GET /validate-phone', () => {
    it('should validate correct Spanish phone starting with 6', async () => {
        const res = await request(app).get('/validate-phone?phone=%2B34612345678');
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ valid: true });
    });

    it('should validate correct Spanish phone starting with 7', async () => {
        const res = await request(app).get('/validate-phone?phone=%2B34712345678');
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ valid: true });
    });

    it('should validate correct Spanish phone starting with 9', async () => {
        const res = await request(app).get('/validate-phone?phone=%2B34912345678');
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ valid: true });
    });

    it('should invalidate incorrect phone starting with other digit', async () => {
        const res = await request(app).get('/validate-phone?phone=%2B34123456789');
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ valid: false });
    });

    it('should invalidate phone with wrong length', async () => {
        const res = await request(app).get('/validate-phone?phone=%2B3461234567');
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ valid: false });
    });

    it('should return 400 if missing', async () => {
        const res = await request(app).get('/validate-phone');
        expect(res.statusCode).toBe(400);
        expect(res.body).toEqual({ error: 'Missing phone parameter' });
    });
});

describe('GET /validate-dni', () => {
    it('should validate correct DNI format', async () => {
        const res = await request(app).get('/validate-dni?dni=12345678A');
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ valid: true });
    });

    it('should validate DNI with lowercase letter', async () => {
        const res = await request(app).get('/validate-dni?dni=87654321z');
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ valid: true });
    });

    it('should invalidate DNI with wrong format', async () => {
        const res = await request(app).get('/validate-dni?dni=1234A');
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ valid: false });
    });

    it('should invalidate DNI with too many digits', async () => {
        const res = await request(app).get('/validate-dni?dni=123456789A');
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ valid: false });
    });

    it('should return 400 if missing', async () => {
        const res = await request(app).get('/validate-dni');
        expect(res.statusCode).toBe(400);
        expect(res.body).toEqual({ error: 'Missing dni parameter' });
    });
});

// =========================
// Conversion & External API Tests
// =========================
describe('GET /color-hex', () => {
    beforeAll(() => {
        const colorsPath = path.join(__dirname, '../Resources/colors.json');
        fs.mkdirSync(path.dirname(colorsPath), { recursive: true });
        fs.writeFileSync(colorsPath, JSON.stringify({ 
            red: '#ff0000', 
            blue: '#0000ff',
            green: '#00ff00',
            white: '#ffffff'
        }));
    });

    afterAll(() => {
        const colorsPath = path.join(__dirname, '../Resources/colors.json');
        if (fs.existsSync(colorsPath)) {
            fs.unlinkSync(colorsPath);
        }
        const resourcesDir = path.join(__dirname, '../Resources');
        if (fs.existsSync(resourcesDir)) {
            fs.rmdir(resourcesDir, (err) => {}); // Clean up directory if empty
        }
    });

    it('should return hex for valid color', async () => {
        const res = await request(app).get('/color-hex?name=red');
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ hex: '#ff0000' });
    });

    it('should return hex for valid color (case insensitive)', async () => {
        const res = await request(app).get('/color-hex?name=BLUE');
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ hex: '#0000ff' });
    });

    it('should return 404 for invalid color', async () => {
        const res = await request(app).get('/color-hex?name=purple');
        expect(res.statusCode).toBe(404);
        expect(res.body).toEqual({ error: 'Color not found' });
    });

    it('should return 400 if missing name', async () => {
        const res = await request(app).get('/color-hex');
        expect(res.statusCode).toBe(400);
        expect(res.body).toEqual({ error: 'Missing color name' });
    });

    it('should return 500 if colors file missing', async () => {
        const colorsPath = path.join(__dirname, '../Resources/colors.json');
        fs.unlinkSync(colorsPath);
        const res = await request(app).get('/color-hex?name=red');
        expect(res.statusCode).toBe(500);
        expect(res.body).toEqual({ error: 'Colors file not found' });
        // Restore file for other tests
        fs.writeFileSync(colorsPath, JSON.stringify({ 
            red: '#ff0000', 
            blue: '#0000ff',
            green: '#00ff00',
            white: '#ffffff'
        }));
    });
});

describe('GET /chuck-norris', () => {
    it('should return a joke', async () => {
        const res = await request(app).get('/chuck-norris');
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('joke');
        expect(typeof res.body.joke).toBe('string');
        expect(res.body.joke.length).toBeGreaterThan(0);
    }, 10000); // Extended timeout for API call
});

// =========================
// Utility Endpoints Tests
// =========================
describe('GET /parse-url', () => {
    it('should parse a valid URL with port and query params', async () => {
        const testUrl = encodeURIComponent('https://example.com:8080/path?foo=bar&baz=qux');
        const res = await request(app).get(`/parse-url?url=${testUrl}`);
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({
            protocol: 'https',
            host: 'example.com',
            port: '8080',
            path: '/path',
            query: { foo: 'bar', baz: 'qux' }
        });
    });

    it('should parse a URL without port', async () => {
        const testUrl = encodeURIComponent('https://example.com/path');
        const res = await request(app).get(`/parse-url?url=${testUrl}`);
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({
            protocol: 'https',
            host: 'example.com',
            port: null,
            path: '/path',
            query: {}
        });
    });

    it('should return 400 if url is missing', async () => {
        const res = await request(app).get('/parse-url');
        expect(res.statusCode).toBe(400);
        expect(res.body).toEqual({ error: 'Missing url parameter' });
    });

    it('should return 400 for invalid URL', async () => {
        const res = await request(app).get('/parse-url?url=not_a_url');
        expect(res.statusCode).toBe(400);
        expect(res.body).toEqual({ error: 'Invalid URL' });
    });
});

describe('GET /list-files', () => {
    const testDir = path.join(__dirname, 'testdir');
    
    beforeAll(() => {
        fs.mkdirSync(testDir, { recursive: true });
        fs.writeFileSync(path.join(testDir, 'file1.txt'), 'hello');
        fs.writeFileSync(path.join(testDir, 'file2.js'), 'console.log("test");');
        fs.mkdirSync(path.join(testDir, 'subfolder'), { recursive: true });
        fs.mkdirSync(path.join(testDir, 'anotherfolder'), { recursive: true });
    });

    afterAll(() => {
        fs.rmSync(testDir, { recursive: true, force: true });
    });

    it('should list files and folders for valid path', async () => {
        const res = await request(app).get(`/list-files?path=${testDir}`);
        expect(res.statusCode).toBe(200);
        expect(res.body.files).toContain('file1.txt');
        expect(res.body.files).toContain('file2.js');
        expect(res.body.folders).toContain('subfolder');
        expect(res.body.folders).toContain('anotherfolder');
    });

    it('should return 404 for invalid path', async () => {
        const res = await request(app).get('/list-files?path=/invalid/path');
        expect(res.statusCode).toBe(404);
        expect(res.body).toEqual({ error: 'Path not found' });
    });

    it('should return 400 if path is missing', async () => {
        const res = await request(app).get('/list-files');
        expect(res.statusCode).toBe(400);
        expect(res.body).toEqual({ error: 'Missing path parameter' });
    });
});

describe('GET /count-word', () => {
    const testFile = path.join(__dirname, 'wordtest.txt');
    
    beforeAll(() => {
        fs.writeFileSync(testFile, 'hello world hello HELLO world. This is a test hello.');
    });

    afterAll(() => {
        if (fs.existsSync(testFile)) {
            fs.unlinkSync(testFile);
        }
    });

    it('should count occurrences of a word (case-insensitive)', async () => {
        const res = await request(app).get(`/count-word?file=${testFile}&word=hello`);
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ count: 4 });
    });

    it('should count occurrences of "world"', async () => {
        const res = await request(app).get(`/count-word?file=${testFile}&word=world`);
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ count: 2 });
    });

    it('should return 0 if word not found', async () => {
        const res = await request(app).get(`/count-word?file=${testFile}&word=absent`);
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ count: 0 });
    });

    it('should return 404 if file not found', async () => {
        const res = await request(app).get('/count-word?file=/invalid/file.txt&word=hello');
        expect(res.statusCode).toBe(404);
        expect(res.body).toEqual({ error: 'File not found' });
    });

    it('should return 400 if file parameter is missing', async () => {
        const res = await request(app).get('/count-word?word=hello');
        expect(res.statusCode).toBe(400);
        expect(res.body).toEqual({ error: 'Missing file or word parameter' });
    });

    it('should return 400 if word parameter is missing', async () => {
        const res = await request(app).get(`/count-word?file=${testFile}`);
        expect(res.statusCode).toBe(400);
        expect(res.body).toEqual({ error: 'Missing file or word parameter' });
    });
});

// =========================
// File Operations Tests
// =========================
describe('GET /zip-folder', () => {
    const testDir = path.join(__dirname, 'ziptest');
    
    beforeAll(() => {
        fs.mkdirSync(testDir, { recursive: true });
        fs.writeFileSync(path.join(testDir, 'file1.txt'), 'hello');
        fs.writeFileSync(path.join(testDir, 'file2.txt'), 'world');
    });

    afterAll(() => {
        fs.rmSync(testDir, { recursive: true, force: true });
    });

    it('should return a zip file for valid folder', async () => {
        const res = await request(app)
            .get(`/zip-folder?path=${testDir}`)
            .buffer()
            .parse((res, callback) => {
                res.setEncoding('binary');
                res.data = '';
                res.on('data', chunk => { res.data += chunk; });
                res.on('end', () => { callback(null, res.data); });
            });
        expect(res.statusCode).toBe(200);
        expect(res.headers['content-type']).toBe('application/zip');
        expect(res.headers['content-disposition']).toMatch(/attachment; filename="ziptest.zip"/);
        expect(res.body.length).toBeGreaterThan(0);
    });

    it('should return 404 for invalid folder', async () => {
        const res = await request(app).get('/zip-folder?path=/invalid/folder');
        expect(res.statusCode).toBe(404);
        expect(res.body).toEqual({ error: 'Folder not found' });
    });

    it('should return 400 if path is missing', async () => {
        const res = await request(app).get('/zip-folder');
        expect(res.statusCode).toBe(400);
        expect(res.body).toEqual({ error: 'Missing path parameter' });
    });
});

// =========================
// Password Generator Tests
// =========================
describe('GET /generate-password', () => {
    it('should generate password with all character types', async () => {
        const res = await request(app).get('/generate-password?length=16&uppercase=true&lowercase=true&numbers=true&symbols=true');
        expect(res.statusCode).toBe(200);
        expect(res.body.password.length).toBe(16);
        expect(typeof res.body.password).toBe('string');
    });

    it('should generate password with only lowercase', async () => {
        const res = await request(app).get('/generate-password?length=8&lowercase=true');
        expect(res.statusCode).toBe(200);
        expect(res.body.password.length).toBe(8);
        expect(res.body.password).toMatch(/^[a-z]+$/);
    });

    it('should generate password with only uppercase', async () => {
        const res = await request(app).get('/generate-password?length=10&uppercase=true');
        expect(res.statusCode).toBe(200);
        expect(res.body.password.length).toBe(10);
        expect(res.body.password).toMatch(/^[A-Z]+$/);
    });

    it('should generate password with only numbers', async () => {
        const res = await request(app).get('/generate-password?length=6&numbers=true');
        expect(res.statusCode).toBe(200);
        expect(res.body.password.length).toBe(6);
        expect(res.body.password).toMatch(/^[0-9]+$/);
    });

    it('should use default length of 12 if not specified', async () => {
        const res = await request(app).get('/generate-password?lowercase=true');
        expect(res.statusCode).toBe(200);
        expect(res.body.password.length).toBe(12);
    });

    it('should return 400 if no character type selected', async () => {
        const res = await request(app).get('/generate-password?length=8');
        expect(res.statusCode).toBe(400);
        expect(res.body).toEqual({ error: 'At least one character type must be selected' });
    });
});
