const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

//PATH TO: .../courses/something
router.get('/create', courseController.create);
router.get('/:id/edit', courseController.edit);
router.get('/:slug', courseController.show);
router.post('/store', courseController.store);
router.put('/:id', courseController.update);
router.delete('/:id', courseController.destroy);

module.exports = router;
