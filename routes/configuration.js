var i18n = require('i18next');

exports.index = function (req, res) {
    res.type("application/javascript");
	res.render('configuration');
};
