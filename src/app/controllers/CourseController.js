const Course = require('../models/Courses');
const { MongooseToObject } = require('../../util/mongoose');

class CourseController {
    //[GET] slug
    show(req, res) {
        Course.findOne({ slug: req.params.slug }).then((course) =>
            res.render('courses/show', { course: MongooseToObject(course) }),
        );
    }

    //[GET] /courses/create
    create(req, res, next) {
        res.render('courses/create');
    }

    //[POST] /courses/store
    store(req, res, next) {
        const formData = req.body;
        formData.image = `https://i.ytimg.com/vi/${req.body.videoID}/hq720.jpg`;
        const course = new Course(formData);
        course.save().then(res.redirect('/')).catch(next);
    }

    //[GET] /courses/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then((course) =>
                res.render('courses/edit', {
                    course: MongooseToObject(course),
                }),
            )
            .catch(next);
    }

    //[PUT] /courses/:id
    update(req, res, next) {
        const updatedCourse = req.body;
        Course.updateOne({ _id: req.params.id }, updatedCourse).then(() =>
            res.redirect('/me/stored/courses'),
        );
    }

    //[DELETE] /courses/:id
    destroy(req, res, next) {
        Course.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    //[DELETE] /courses/:id/force
    forceDestroy(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    //[PATCH] /courses/:id/restore
    restore(req, res, next) {
        Course.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new CourseController();
