const Course = require('../models/Courses');
const { multipleMongooseToObject } = require('../../util/mongoose');

class MeController {
    //[GET] /me/stored/courses
    storedCourses(req, res, next) {
        Promise.all([
            Course.countWithDeleted({ deleted: true }),
            Course.find({}),
        ])
            .then(([deletedCourses, availableCourses]) => {
                res.render('me/stored-courses', {
                    deletedCourses,
                    courses: multipleMongooseToObject(availableCourses),
                });
            })
            .catch(next);

        // Course.countWithDeleted({ deleted: true })
        //     .then((result) =>
        //         console.log(result)
        //     );

        // Course.find({}).then((courses) =>
        //     res.render('me/stored-courses', {
        //         courses: multipleMongooseToObject(courses),
        //     }),
        // );
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
