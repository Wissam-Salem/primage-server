let sendUsernameController = async (req, res) => {
    try {
        let { username } = res.locals.user;
        res.json({ username });
    } catch (error) {
        console.log(error);
        res.json({ username: "" });
    }
}

module.exports = sendUsernameController;