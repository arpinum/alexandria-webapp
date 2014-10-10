var express = require("express"),
    path = require('path'),
    i18n = require('i18next');
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var serveStatic = require('serve-static');



var app = express();


console.log("Configuration de l'application pour l'environnement " + app.get('env'));

i18n.init({
    ignoreRoutes: ['public/'],
    fallbackLng: 'en',
    detectLngFromHeaders: true
});

if ('development' === app.get('env')) {
    app.set('urlApi', 'http://localhost:8080');
}

if ('production' === app.get('env')) {
    app.set('urlApi', 'http://alexandria-api.herokuapp.com');
}


app.use(i18n.handle);
app.use(cookieParser());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.text({limit: '50mb'}));
app.use(require("connect-assets")({paths: ["assets/js", "assets/css", "public/bower_components"]}));
app.set('views', path.join(__dirname, '/vues'));
app.set('view engine', 'jade');

app.use(serveStatic(__dirname + '/public/'));

require('./routes')(app);

i18n.registerAppHelper(app);


var port = process.env.PORT || 5000;
app.listen(port, function () {
    console.log("Écoute sur le port " + port);
});
