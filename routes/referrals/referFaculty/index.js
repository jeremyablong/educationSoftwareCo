const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const cors = require("cors");
const app = express();
const config = require("config");
const mongo = require("mongodb");



mongo.connect(config.get("mongoURI"),  { useNewUrlParser: true }, { useUnifiedTopology: true }, cors(), (err, db) => {
	router.post("/", (req, res) => {

		const { email, code } = req.body;

		const collection = db.collection("faculties");

		collection.findOneAndUpdate({ email: email }, { $push: { code: code }}, (err, item) => {
			if (err) {
				console.log("renderFaculty Error :", err);
			}
			console.log("ITEM :", item);
			res.send(item);
		})  
	});
});

module.exports = router;