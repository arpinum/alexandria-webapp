var request = require("request");

exports.proxy = function (apiUrl) {
    return function (req, res) {
        req.pipe(request({
            url: apiUrl + "/" + req.params[0],
            qs:req.query
        })).pipe(res);
    }
};
