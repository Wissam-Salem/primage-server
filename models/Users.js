const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        required: true
    },
    pfp: {
        type: String,
        trim: true,
        default: ""
    },
    bio: {
        type: String,
        trim: true,
        default: ""
    },
    favorates: {
        type: [String],
    },
    notifications: {
        one: {
            type: Boolean,
            default: false
        },
        two: {
            type: Boolean,
            default: false
        },
        three: {
            type: Boolean,
            default: false
        }

    }
})
const Users = mongoose.model("user", userSchema);

module.exports = Users;