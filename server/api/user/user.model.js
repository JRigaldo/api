'use strict';

const Mongoose = require('mongoose');

const options = {};

const UserSchema = new Mongoose.Schema({

    name: {type: String, required: true, trim: true, unique: true, lowercase: true},
    status: {type: String, enum: ["ACTIVE", "INACTIVE"], required: true, default: "ACTIVE"},
    count: Number,
    birth: {type: Date, required: true, default: Date.now}

}, options);

module.exports = Mongoose.model('User', UserSchema);