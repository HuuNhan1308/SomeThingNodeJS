
class SiteController {

    //[GET] /
    index(req, res) {
        res.render('home');
    }

    //[GET] slug
    show(req, res) {
        res.send('Test SLUG at home');
    }
}

module.exports = new SiteController;