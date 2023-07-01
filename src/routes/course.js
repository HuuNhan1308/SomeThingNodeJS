const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

//PATH TO: .../courses/something
router.get('/create', courseController.create);
router.get('/:slug', courseController.show);
router.get('/:id/edit', courseController.edit);
router.post('/store', courseController.store);
router.put('/:id', courseController.update);

module.exports = router;
