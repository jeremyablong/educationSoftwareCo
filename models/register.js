const mongoose = require("mongoose");
const express = require("express");

const SignupSchema = new mongoose.Schema({
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
	}
});

module.exports = Signup = mongoose.model("students", SignupSchema);