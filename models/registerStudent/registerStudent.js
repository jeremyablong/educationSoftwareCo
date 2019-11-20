const mongoose = require("mongoose");
const express = require("express");

const RegisterStudentSchema = new mongoose.Schema({
	name: { 
		type: String
	},
    type: { 
    	type: String 
    },
	size: {
		type: Number
	},
	fullName: {
		type: String
	},
	email: {
		type: String
	},
	address: {
		type: String
	},
	city: {
		type: String
	},
	state: {
		type: String
	},
	schoolID: {
		type: String
	},
	studentPhoneNumber: {
		type: String
	},
	mothersName: {
		type: String
	},
	fathersName: {
		type: String
	},
	fathersPhoneNumber: {
		type: String
	},
	mothersPhoneNumber: {
		type: String
	},
	primaryContact: {
		type: String
	},
	gender: {
		type: String
	},
	race: {
		type: String
	},
	location: {
		type: String
	}
});

module.exports = SignupStudent = mongoose.model("students", RegisterStudentSchema);