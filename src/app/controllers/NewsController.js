class NewsController {
    //[GET] /news
    index(req, res) {
        res.render('news');
    }

    //[GET] :slug
    show(req, res) {
        res.send('Test some SLUG!!!');
    }
}

module.exports = new NewsController();
