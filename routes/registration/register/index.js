const SignupUser = require("../../../models/register.js");
const mongoose = require("express");
const multer = require("multer");
const express = require("express");
const router = express.Router();
const mongo = require("mongodb");
const config = require("config");
const cors = require("cors"); 
const saltRounds = 10;
const Grid = require("gridfs-stream");
const GridFsStorage = require('multer-gridfs-storage');
Grid.mongo = mongoose.mongo;
const fs = require('fs');
const multerS3 = require('multer-s3');
const aws = require('aws-sdk');
const moment = require('moment');

aws.config.update({
    secretAccessKey: 'MNZyWkxpfL8ZJScSDr0/prKNnuOxpWAYPvKk0s2k',
    accessKeyId: 'AKIAJ4DUVBXJGVN4VFPA',
    region: 'us-east-1'
});


s3 = new aws.S3();

var gfs = Grid("test", mongo);

const storage = new GridFsStorage({
  url: config.get("mongoURI"),
  gfs: gfs,
  file: (req, file) => {
    return {
        filename: file.originalname
    }
  }
});
var upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'pictures-schooling-app',
        key: function (req, file, cb) {
            console.log(file);
            cb(null, file.originalname); //use Date.now() for unique file keys
        }
    })
});

mongo.connect(config.get("mongoURI"), { useNewUrlParser: true }, { useUnifiedTopology: true }, cors(), (err, db) => {
	router.post("/", upload.single("image"), (req, res) => {
		if (err) {
			console.log(`This is the error : ${err}`);
		}
		// console.log(`This is the req.body : ${req.body}`);

		console.log("fileeeeee ------------- :", req.file);
		
		const { fullName, email, passwordConfirm, streetAddress, city, state, zipCode, gender, birthdate } = req.body;
		
		const newUser = new SignupUser({
			fullName,
			email,
			passwordConfirm, 
			streetAddress, 
			city, 
			state, 
			zipCode, 
			gender, 
			birthdate,
			location: req.file.location
		});
		
		db.collection("faculties", (err, collection) => {
			collection.findOne({
				email: email
			}).then((user) => {
				if (user) {
					console.log("User Already Exists.");
					res.json({ message: "User Already Exists." })
				} else {
					console.log("User DOESN'T exist!")
					newUser.save((err, data) => {
						if (err) {
							console.log("This is the error when saving user :", err);
						} else {
							res.json({ message: "User Successfully Added!" })
							console.log("This is the correct saved data :", data);
						}
					})	
				}
			}).catch((err) => {
				console.log(err);
			}); 
		});

		// newUser.save((err, data) => {
		// 	if (err) {
		// 		console.log("This is the error when saving user :", err);
		// 	} else {
		// 		console.log("This is the correct saved data :", data);
		// 	}
		// })	
      });
});

module.exports = router;