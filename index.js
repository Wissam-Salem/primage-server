let express = require("express");
let cors = require("cors");
let cookieParser = require("cookie-parser");
let app = express();
let connect = require("./db/dbConnect");
let mongoose = require("mongoose");
require("dotenv").config();
let PORT = process.env.PORT;

let test = require("./routes/test");
let register = require("./routes/userRoutes/register");
let login = require("./routes/userRoutes/login");
let authenticating = require("./routes/authenticating");
let addImage = require("./routes/imagesRoutes/addImage");
let resetPassword = require("./routes/userRoutes/resetPassword");
let deleteUser = require("./routes/userRoutes/deleteUser");
let logout = require("./routes/userRoutes/logout");
let changeUsername = require("./routes/userRoutes/changeUsername");
let editBio = require("./routes/userRoutes/editBio");
let getImages = require("./routes/imagesRoutes/getImages");
let changePfp = require("./routes/userRoutes/changePfp");
let addToFavorate = require("./routes/userRoutes/addToFavorate");
let getFavorateImages = require("./routes/imagesRoutes/getFavorateImages");
let editNotifications = require("./routes/userRoutes/editNotifications");

app.use(express.urlencoded({ limit: "10mb" }));
app.use(express.json({ limit: "10mb" }));
app.use(cors({
    credentials: true,
    origin: "http://192.168.0.106:3000",
    optionsSuccessStatus: 205
}));
app.use(cookieParser());
connect();

app.use("/", test);
app.use("/", register);
app.use("/", login);
app.use("/", addImage);
app.use("/", resetPassword);
app.use("/", deleteUser);
app.use("/", logout);
app.use("/", changeUsername);
app.use("/", editBio);
app.use("/", getImages);
app.use("/", changePfp);
app.use("/", authenticating);
app.use("/", addToFavorate);
app.use("/", getFavorateImages);
app.use("/", editNotifications);

mongoose.connection.once("open", () => {
    app.listen(PORT, () => {
        console.log(`Running on Port ${PORT}`);
    })
});