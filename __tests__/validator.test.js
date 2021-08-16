'use strict';

const { app } = require('../src/server');

const supertest = require('supertest');

const request = supertest(app);

describe('validator middleware', () => {

    it('should check the name if string ', async () => {
        let params = '/person?name=saleem';
        let status = 200

        const response = await request.get(params);

        expect(response.status).toBe(status);
        expect(response.body).toEqual({ name: 'saleem' });
    });
})