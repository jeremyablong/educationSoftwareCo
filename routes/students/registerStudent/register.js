const SignUpStudent = require("../../../models/registerStudent/registerStudent.js");
const mongoose = require("express");
const express = require("express");
const router = express.Router();
const mongo = require("mongodb");
const config = require("config");
const cors = require("cors"); 
const saltRounds = 10;


mongo.connect(config.get("mongoURI"), { useNewUrlParser: true }, { useUnifiedTopology: true }, cors(), (err, db) => {
	router.post("/", (req, res) => {
		if (err) {
			console.log(`This is the error : ${err}`);
		}
		console.log(`This is the req.body : ${req.body}`);
		const { fullName, email, address, city, state, schoolID, studentPhoneNumber, mothersName, fathersName, fathersPhoneNumber, mothersPhoneNumber, primaryContact, gender, race } = req.body;
		
		const newUser = new SignUpStudent({
			fullName,
			email,
			address,
			city,
			state,
			schoolID,
			studentPhoneNumber,
			mothersName,
			fathersName,
			fathersPhoneNumber,
			mothersPhoneNumber,
			primaryContact,
			gender,
			race
		});
		
		db.collection("students", (err, collection) => {
			collection.findOne({
				email: email
			}).then((user) => {
				if (user) {
					console.log("User Already Exists.");
					res.json({ message: "Student Already Exists." })
				} else {
					console.log("User DOESN'T exist!")
					newUser.save((err, data) => {
						if (err) {
							console.log("This is the error when saving student :", err);
						} else {
							res.json({ message: "Student Successfully Added!" })
							console.log("This is the correct saved data :", data);
						}
					})	
				}
			}).catch((err) => {
				console.log(err);
			}); 
		});
      });
});

module.exports = router;