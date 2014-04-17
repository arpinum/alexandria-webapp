var express = require("express"),
    path = require('path'),
    i18n = require('i18next');


var app = express();


console.log("Configuration de l'application pour l'environnement " + app.get('env'));

i18n.init({
    ignoreRoutes: ['public/'],
    fallbackLng: 'en'
});


app.configure('development', function () {
    app.use(express.logger('dev'));
    app.locals.urlApi = 'http://localhost:8080';

});

app.configure('staging', function () {
    app.locals.urlApi = 'http://votreapi-itg.fr';
});

app.configure('production', function () {
    app.locals.urlApi = 'http://alexandria-api.herokuapp.com';
});

app.configure(function () {
    app.use(express.logger());
    app.use(express.cookieParser());
    app.use(express.bodyParser());
    app.use(i18n.handle);
    app.set('views', path.join(__dirname, '/vues'));
    app.set('view engine', 'jade');
    app.use(express.methodOverride());
    app.use(express.static(__dirname + '/public/'));
    app.use(express.errorHandler());
});

require('./routes')(app);

i18n.registerAppHelper(app);

var port = process.env.PORT || 5000;
app.listen(port, function () {
    console.log("Écoute sur le port " + port);
});
