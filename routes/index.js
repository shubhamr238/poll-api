const express = require('express');
const router = express.Router();

//route to /products
router.use('/questions',require('./questions'));
router.use('/options',require('./options'));

module.exports= router;