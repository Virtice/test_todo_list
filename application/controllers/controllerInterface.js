function controllerInterface() {

}

controllerInterface.prototype.actionCreate = function(parsedRequest) {
    parsedRequest.response.send('interface create method run');
};

controllerInterface.prototype.actionRead = function(parsedRequest) {
    parsedRequest.response.send('interface read method run');
};

controllerInterface.prototype.actionUpdate = function(parsedRequest) {
    parsedRequest.response.send('interface update method run');
};

controllerInterface.prototype.actionDelete = function(parsedRequest) {
    parsedRequest.response.send('interface delete method run');
};

module.exports = controllerInterface;