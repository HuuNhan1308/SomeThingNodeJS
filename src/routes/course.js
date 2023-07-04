const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

//PATH TO: .../courses/something
router.get('/create', courseController.create);
router.get('/:id/edit', courseController.edit);
router.get('/:slug', courseController.show);
router.post('/store', courseController.store);
router.post('/handle-form-actions', courseController.handleFormActions);
router.put('/:id', courseController.update);
router.patch('/:id/restore', courseController.restore);
router.delete('/:id', courseController.destroy);
router.delete('/:id/force', courseController.forceDestroy);

module.exports = router;
