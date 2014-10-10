exports.serve = function (req, res) {

    res.render("templates/" + req.params[0], {
        pageClass : 'home'});

};
