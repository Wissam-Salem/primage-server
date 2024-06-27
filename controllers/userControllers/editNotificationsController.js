let Users = require("../../models/Users");

let editNotificationsController = async (req, res) => {
    try {
        let { one, two, three } = req.body;
        let { username } = res.locals.user;
        let user = await Users.findOneAndUpdate({ username }, { notifications: { one: one, two: two, three: three } });
        console.log("Notifications has been updated");
        console.log(user.notifications);
        res.json({ success: true, message: "Notifications has been updated" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error! please try again" });
    }
}

module.exports = editNotificationsController;