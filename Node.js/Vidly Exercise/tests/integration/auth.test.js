const request = require('supertest');
const { Genre } = require('../../models/genre');
const { User } = require('../../models/user'); 
let server;

describe('auth middleware', () => {
    beforeEach(() => {
        server = require("../../index");
        token = new User().generateAuthToken();
    });
    afterEach(async () => {
        await Genre.remove({});
        await server.close();
    });
    
    let token;
    // Happy Path
    const exec = () => { // async not neccessary since we don't want to do work after
        // Valid post request
        return request(server)
            .post('/api/genres')
            .set('x-auth-token', token) // Set method, whatever we pass is converted into string
            .send({ name: 'genre1' })
    }

    it('should return 401 if no token is provided', async () => {
        token = ''; // If we put null set method in request will cast it as 'null'

        const res = await exec();

        expect(res.status).toBe(401);
    });

    it('should return 400 if token is invalid', async () => {
        token = 'a';

        const res = await exec();

        expect(res.status).toBe(400);
    });

    it('should return 200 if token is valid', async () => {        
        const res = await exec();

        expect(res.status).toBe(200);
    });
});