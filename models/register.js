const mongoose = require("mongoose");
const express = require("express");

const SignupSchema = new mongoose.Schema({
	filename: { 
		type: String
	},
    originalname: { 
    	type: String 
    },
	fieldname: {
		type: String
	},
	encoding: {
		type: String
	},
	mimetype: {
		type: String
	},
	id: {
		type: String
	},
	metadata: {
		type: String
	},
	bucketName: {
		type: String
	},
	chunkSize: {
		type: Number
	},
	size: {
		type: Number
	},
	md5: {
		type: String
	},
	uploadDate: {
		type: Date
	},
	contentType: {
		type: String
	},
	fullName: {
		type: String
	},
	email: {
		type: String
	},
	passwordConfirm: {
		type: String
	},
	streetAddress: {
		type: String
	},
	city: {
		type: String
	},
	state: {
		type: String
	},
	zipCode: {
		type: String
	},
	gender: {
		type: String
	},
	birthdate: {
		type: Date
	},
	location: {
		type: String
	}
});

module.exports = Signup = mongoose.model("faculty", SignupSchema);