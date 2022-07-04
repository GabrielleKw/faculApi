
const UserController = require("../services/UserController")


module.exports = class UserRoute {
    static async getUsers(req, res) {
        res.status(200).send(UserController.getUsers())
    }

    static async save(req, res) {

        console.log(req);
//        res.status(200).send(UserController.save())
    }
}