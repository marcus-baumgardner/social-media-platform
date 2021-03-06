const mongoose = require('mongoose');
const Joi = require('joi');
const { date } = require('joi');


const imageSchema = new mongoose.Schema({
    name: String,
    desc: String,
    img:
    {
        data: Buffer,
        contentType: String
    }
});

const newPost = new mongoose.Schema({
    body: {type: String, minlength: 1, maxlength: 240, required: true},
    likes: {type: Number, min: 0},
    dislikes: {type: Number, min: 0},
});

const profileData = new mongoose.Schema({
    posts: { default: [], type: Array},
    aboutMe: { default: "", type: String, minlength: 1, maxlength: 800 },
    likedMusic: { default: [], type: String, minlength: 1, maxlength: 15 },
    dislikedMusic: { default: [], type: String, minlength: 1, maxlength: 15 },
    profilePic: [imageSchema],
});

const userInfo = new mongoose.Schema({
    firstName: { type: String, required: true, minlength: 1, maxlength: 15 },
    lastName: { type: String, required: true, minlength: 1, maxlength: 15 },
    email: { type: String, required: true, minlength: 1, unique: true },
    password: { type: String, required: true,},
    profileInfo: [profileData],
    likedPosts: {default: [], type: Array,},
    friends: {default: [], type: Array,},
    friendRequests: {default: [], type: Array},
    date: { type: Date, default: Date.now}
});


const UserInfo = mongoose.model('UserInfo', userInfo);
const ProfileData = mongoose.model('ProfileData', profileData);
const NewPost = mongoose.model('Post', newPost);

function validateNewPost(newPost){
    const schema = Joi.object({
        body: Joi.string().min(1).max(250).required(),
        likes: Joi.number.min(0),
        dislikes: Joi.number.min(0)
    })
    return schema.validate(newPost);
}

function validateUserInfo(userInfo) {
    console.log(userInfo)
    const schema = Joi.object({
        firstName: Joi.string().min(1).max(15).required(),
        lastName: Joi.string().min(1).max(15).required(),
        email: Joi.string().min(1).required(),
        password: Joi.string().required(),
        likedPost: Joi.array(),
        friends: Joi.array(),
        friendRequests: Joi.array(),
        date: Joi.date(),
       
    });
    return schema.validate(userInfo);
}

function validateProfileData(profileData) {
    const schema = Joi.object({
        posts: Joi.string().max(240).min(1).required(),
        likedMusic: Joi.string().min(1).max(15).required(),
        dislikedMusic: Joi.string().min(1).max(15).required(),

    });
    return schema.validate(profileData);
}

module.exports.NewPost = NewPost;
module.exports.validateNewPost = validateNewPost;
module.exports.UserInfo = UserInfo;
module.exports.validateUserInfo = validateUserInfo;
module.exports.userInfo = userInfo;
module.exports.ProfileData = ProfileData;
module.exports.validateProfileData = validateProfileData;