const jwt = require('jsonwebtoken');
const { secret } = require('../config/index')

module.exports = user => (
    jwt.sign(
        {
            user
        },
        secret,
        { expiresIn: '24h' }
    )
);