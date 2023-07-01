const Course = require('../models/Courses');
const { MongooseToObject } = require('../../util/mongoose');

class SiteController {
    //[GET] slug
    show(req, res) {
        Course.findOne({ slug: req.params.slug }).then((course) =>
            res.render('courses/show', { course: MongooseToObject(course) }),
        );
    }
}

module.exports = new SiteController();
