const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const cors = require("cors");
const app = express();
const config = require("config");
const mongo = require("mongodb");


mongo.connect(config.get("mongoURI"),  { useNewUrlParser: true }, { useUnifiedTopology: true }, cors(), (err, db) => {
	router.post("/", (req, res) => {

		const { email, password } = req.body;

		db.collection("students", (err, collection) => {
			collection.findOne({
				email: req.body.email
			}).then((user) => {
				if (user) {
					console.log(user);
					if (user.email === email && user.passwordConfirm === password) {
						console.log("There is a login MATCH.")
						res.json({ message: "There is a MATCH", data: user });
					} else {
						res.json({ message: "NO match" });
					}
				} 
			}).catch((err) => {
				console.log(err);
			}); 
		});
	});
});

module.exports = router;