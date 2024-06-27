let testRoute = async (req, res) => {
    let { username, email } = req.body;
    res.json({ username, email })
}

module.exports = testRoute;