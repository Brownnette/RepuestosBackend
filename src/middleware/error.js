const { Request, Response, NextFunction } = require('express');

const errorHandler = (error, req, res, next) => {
    console.error(`Error: ${error.message}`);
    return res.status(500).json({ message: 'Internal Server Error' });
};

module.exports = { errorHandler };

