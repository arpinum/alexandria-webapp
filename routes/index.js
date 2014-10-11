var indexRoute = require("./accueil");
var configurationRoute = require("./configuration");

module.exports = function(app) {
    app.get('/', indexRoute.index);
    app.get('/configuration.js', configurationRoute.index);
    //app.all(/\/api\/(.*)/,require('./api').proxy(app.get("urlApi")));
    app.get(/\/templates\/(.*)/,require('./templates').serve);
}
