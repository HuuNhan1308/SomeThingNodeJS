const Course = require('../models/Courses');
const { multipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    //[GET] /
    index(req, res) {
        Course.find({})
            .then((courses) => {
                console.log(req.ip);
                res.render('home', {
                    courses: multipleMongooseToObject(courses),
                });
            })
            .catch((err) => console.log(err));
    }

    //[GET] slug
    show(req, res) {
        res.send('Test SLUG at home');
    }
}

module.exports = new SiteController();
