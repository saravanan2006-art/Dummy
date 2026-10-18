
import request from 'supertest';
import { jest, test, expect } from '@jest/globals';
import app from './app.js';

test('GET / should return the greeting message', async () => {
    const response = await request(app).get('/');

    expect(response.status).toBe(200);
    expect(response.text).toBe('Matha pitha Mamitha');
});
