const mongoose = require("mongoose");
const express = require("express");

const RegisterStudentSchema = new mongoose.Schema({
	filename: { 
		type: String
	},
    originalname: { 
    	type: String 
    },
	fieldname: {
		type: String
	},
	originalname: {
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
	}
});

module.exports = SignupStudent = mongoose.model("students", RegisterStudentSchema);