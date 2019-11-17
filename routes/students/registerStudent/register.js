const SignUpStudent = require("../../../models/registerStudent/registerStudent.js");
const mongoose = require("express");
const express = require("express");
const router = express.Router();
const mongo = require("mongodb");
const config = require("config");
const cors = require("cors"); 
const saltRounds = 10;
const Busboy = require('busboy');
const multer = require("multer");
const crypto = require('crypto');
const path = require("path");
const uuidv4 = require("uuid/v4")
// const multer = require("multer");
const GridFsStorage = require('multer-gridfs-storage');

const DIR = './public/';

const storage = new GridFsStorage({
  url: config.get("mongoURI"),
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err)
        }
        const filename = file.originalname
        const fileInfo = {
          filename: filename,
          bucketName: 'uploads',
        }
        resolve(fileInfo)
      })
    })
  },
})
var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});


mongo.connect(config.get("mongoURI"), { useNewUrlParser: true }, { useUnifiedTopology: true }, cors(), (err, db) => {
	router.post("/", upload.single("image"), (req, res) => {
		if (err) {
			console.log(`This is the error : ${err}`);
		}
		console.log("Request ---", req.body);
        console.log("Request file ---", req.file);
		console.log(`This is the req.body : ${req.body}`);
		const { fullName, email, address, city, state, schoolID, studentPhoneNumber, mothersName, fathersName, fathersPhoneNumber, mothersPhoneNumber, primaryContact, gender, race } = req.body;
		
		const newUser = new SignUpStudent({
			file: req.file,
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