'use strict';

const supertest = require('supertest');
const server = require('../src/server');
const request = supertest(server.app);

describe('express server', () => {
    it('should check the hello world works successfully', async () => {
        //arrange
        let param = '/';
        let status = 200;
        let text = 'Hello World';

        //act
        const response = await request.get(param);

        //assert
        expect(response.status).toBe(status);
        expect(response.text).toBe(text);
    });

    it('should check the 500 error', async () => {
        //arrange
        let param = '/bad';
        let status = 500;

        //act
        const response = await request.get(param);

        //assert
        expect(response.status).toBe(status);
        expect(response.body.route).toBe(param);
    });
    it('should check 404 not found error', async () => {
        //arrange
        let param = '/notfound';
        let status = 404;

        //act
        const response = await request.get(param);

        //assert
        expect(response.status).toBe(status);
    });
});