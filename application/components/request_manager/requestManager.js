function getMethod(req) {
    return req.method;
}

function getController(req) {
    let parsedUrl = req.params[0].split('/');
    return parsedUrl.length > 1
           ? parsedUrl[1]
           : null;
}

function getParams(req) {
    let parsedUrl = req.params[0].split('/');
    return parsedUrl.length > 2
           ? parsedUrl.slice(2)
           : null;
}

function parse(app, callback) {
    return app.get('*', function(req, res) {
        console.log('REQUEST PARSE GET: ', getMethod(req), req.url);

        if (getController(req) === 'favicon.ico') {
            return;
        }

        callback({
            request: req,
            response: res,
            method: getMethod(req),
            controller: getController(req),
            params: getParams(req),
        });
    })
    .all('*', function(req, res) {
        console.log('REQUEST PARSE ALL: ', getMethod(req), req.url);

        callback({
            request: req,
            response: res,
            method: getMethod(req),
            controller: getController(req),
            params: req.body,
        });
    });
}

module.exports = {
    parse: parse,
};
