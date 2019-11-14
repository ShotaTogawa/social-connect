const express = require('express');
const router = express.Router();

// @route GET api/posts
// @desc Test Routes
// @access Public
router.get('/', (req, res) => res.send('posts router'));

module.exports = router;
