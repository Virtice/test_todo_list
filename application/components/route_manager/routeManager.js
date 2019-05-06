const fs = require('fs');

function route(parseRequest) {
    const controllerName = parseRequest.controller || 'UNDEFINED';
    const path = `${process.cwd()}/application/controllers/${controllerName}Controller.js`,
        existsController = fs.existsSync(path);

    if (!existsController) {
        throw new Error(`Не найден контроллер по адресу: ${path}`);
    }

    const controller = require(path);

    switch (parseRequest.method) {
        case 'GET':
            controller.actionRead(parseRequest);
            break;
        case 'POST':
            controller.actionCreate(parseRequest);
            break;
        case 'PATCH':
            controller.actionUpdate(parseRequest);
            break;
        case 'DELETE':
            controller.actionDelete(parseRequest);
            break;
        default:
            throw new Error(`Недопустимый метод запроса: ${parseRequest.method}`);
    }
}

module.exports = {
    route: route,
};
