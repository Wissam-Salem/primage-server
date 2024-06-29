let Users = require("../../models/Users");

let unfollowController = async (req, res) => {
    try {
        let { account } = req.body;
        let { username } = res.locals.user;
        let unfollowAccount = await Users.findOneAndUpdate({ username }, { $pull: { followings: account } });
        let removeFollower = await Users.findOneAndUpdate({ account }, { $pull: { followers: username } });
        res.json({ success: true, message: "Unfollowed" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error! please try agains" });
    }
}

module.exports = unfollowController;