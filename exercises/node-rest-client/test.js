const request = require('supertest');
const serverUrl = 'https://crispy-space-rotary-phone-7v4ggpqpg77wfr677-3000.app.github.dev';

describe('GET /hello', () => {
    it('should return Hello, world! when key=world', async () => {
        const res = await request(serverUrl).get('/hello?key=world');
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ message: 'Hello, world!' });
    });

    it('should return Hello, <key>! for other keys', async () => {
        const res = await request(serverUrl).get('/hello?key=test');
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ message: 'Hello, test!' });
    });

    it('should return 400 if no key is provided', async () => {
        const res = await request(serverUrl).get('/hello');
        expect(res.statusCode).toBe(400);
        expect(res.body).toEqual({ error: 'Missing key parameter' });
    });
});

describe('GET /diffdates', () => {
    it('should return the difference in days for valid dates', async () => {
        const res = await request(serverUrl).get('/diffdates?date1=01-10-2025&date2=07-10-2025');
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ days: 6 });
    });

    it('should return 0 if dates are the same', async () => {
        const res = await request(serverUrl).get('/diffdates?date1=07-10-2025&date2=07-10-2025');
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ days: 0 });
    });

    it('should return 400 if a date is missing', async () => {
        const res = await request(serverUrl).get('/diffdates?date1=01-10-2025');
        expect(res.statusCode).toBe(400);
        expect(res.body).toEqual({ error: 'Missing date parameters' });
    });

    it('should return 400 for invalid date format', async () => {
        const res = await request(serverUrl).get('/diffdates?date1=2025-10-01&date2=2025-10-07');
        expect(res.statusCode).toBe(400);
        expect(res.body).toEqual({ error: 'Invalid date format. Use dd-MM-yyyy.' });
    });
});
