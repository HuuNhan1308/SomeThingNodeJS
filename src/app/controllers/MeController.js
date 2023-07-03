const Course = require('../models/Courses');
const { multipleMongooseToObject } = require('../../util/mongoose');

class MeController {
    //[GET] /me/stored/courses
    storedCourses(req, res, next) {
        // Course.countDocumentsDeleted()
        //     .then((result) =>
        //         res.send(result)
        //     );

        Course.find({}).then((courses) =>
            res.render('me/stored-courses', {
                courses: multipleMongooseToObject(courses),
            }),
        );
    }

    //[GET] /me/trash/courses
    trash(req, res, next) {
        Course.findWithDeleted({ deleted: true })
            .then((courses) => {
                res.render('me/trash-courses', {
                    courses: multipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }
}

module.exports = new MeController();
