const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');

//PATH TO: .../courses/something
router.get('/stored/courses', meController.storedCourses);

module.exports = router;
