
const userController = require("../controllers/UserControllerr")

module.exports = class UserRoute {
    constructor(app) {
        app.route("/user").get(userController.getUsers);
        app.route("/user").get(userController.save);

    }
}