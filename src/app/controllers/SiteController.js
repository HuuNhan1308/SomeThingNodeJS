const Course = require('../models/Courses');

class SiteController {
    //[GET] /

    index(req, res) {
        Course.find({}).then((courses) => {
            res.json(courses);
        });
    }

    //[GET] slug
    show(req, res) {
        res.send('Test SLUG at home');
    }
}

module.exports = new SiteController();
