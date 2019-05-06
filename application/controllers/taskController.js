const util = require('util'),
    controllerInterface = require('./controllerInterface');

function taskController() {

}

util.inherits(taskController, controllerInterface);

taskController.prototype.actionRead = function(parsedRequest) {
    parsedRequest.response.send('taskController actionRead');
};

taskController.prototype.actionCreate = function(parsedRequest) {
    parsedRequest.response.send('taskController actionCreate');
};

module.exports = new taskController();