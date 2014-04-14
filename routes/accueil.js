var i18n = require('i18next');

exports.index = function (req, res) {

	res.render('index', {
        classe : 'accueil',
        titre : i18n.t("app.title.global")});

};
