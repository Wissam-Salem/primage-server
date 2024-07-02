let Users = require("../../models/Users");

let followController = async (req, res) => {
    try {
        let { account } = req.body;
        let { username } = res.locals.user;
        let followAccount = await Users.findOneAndUpdate({ username }, { $push: { followings: account } });
        let addFollower = await Users.findOneAndUpdate({ account }, { $push: { followers: username } });
        res.json({ success: true, message: `You followed ${account}` });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error! please try agains" });
    }
}

module.exports = followController;