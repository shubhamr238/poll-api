const express = require('express');
const router = express.Router();

//route to /products
router.use('/questions',require('./questions'));


module.exports= router;