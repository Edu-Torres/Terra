const { User } = require('../../../models/user');
const auth = require('../../../middleware/auth');
const mongoose = require("mongoose");

describe('auth middleware', () => {
    it('should populate req.user with the payload of a vlid JWT', () => {
        const user = { _id: mongoose.Types.ObjectId(), isAdmin: true }
        const token = new User(user).generateAuthToken();
        const req = {
            header: jest.fn().mockReturnValue(token)
        };
        const res = {};
        const next = jest.fn();

        auth(req, res, next);

        expect(req.user).toMatchObject(user);
        // For some reason this passes without _id being a Hexodecimal string
    })
})