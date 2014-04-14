var indexRoute = require("./accueil");
var configurationRoute = require("./configuration");

module.exports = function(app) {
    app.get('/', indexRoute.index);
    app.get('/configuration.js', configurationRoute.index);
}
