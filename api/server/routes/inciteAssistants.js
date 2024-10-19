const express = require('express');
const { inciteAssistants } = require('../services/Endpoints');

const router = express.Router();

// Duplicate the routes from assistants.js, but use inciteAssistants instead of assistants
// ...

module.exports = router;
