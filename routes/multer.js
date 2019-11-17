const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const cors = require("cors");
const app = express();
const config = require("config");
const mongo = require("mongodb");
const Busboy = require('busboy');
const multer = require("multer");
const crypto = require('crypto');
const path = require("path");
const uuidv4 = require("uuid/v4");
const SignUpStudent = require("../models/registerStudent/registerStudent.js");
// const multer = require("multer");
const GridFsStorage = require('multer-gridfs-storage');

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './client/src/public/uploads/');
     },
    filename: function (req, file, cb) {
        cb(null , file.originalname);
    }
});
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


mongo.connect(config.get("mongoURI"),  { useNewUrlParser: true }, { useUnifiedTopology: true }, cors(), (err, db) => {
  router.post("/", upload.single("image"), (req, res) => {
    console.log("Request ---", req.body);
    console.log("Request file ---", req.file);
    const { fullName, email, address, city, state, schoolID, studentPhoneNumber, mothersName, fathersName, fathersPhoneNumber, mothersPhoneNumber, primaryContact, gender, race } = req.body;
    const newStudent = new SignUpStudent();

    newStudent.fullName = req.body.fullName;
    newStudent.email = req.body.email;
    newStudent.address = req.body.address;
    newStudent.city = req.body.city;
    newStudent.state = req.body.state;
    newStudent.schoolID = req.body.schoolID;
    newStudent.studentPhoneNumber = req.body.studentPhoneNumber;
    newStudent.mothersName = req.body.mothersName;
    newStudent.fathersName = req.body.fathersName;
    newStudent.fathersPhoneNumber = req.body.fathersPhoneNumber;
    newStudent.mothersPhoneNumber = req.body.mothersPhoneNumber;
    newStudent.primaryContact = req.body.primaryContact;
    newStudent.gender = req.body.gender;
    newStudent.race = req.body.race;
    newStudent.fieldname = req.file.filename,
    newStudent.originalname = req.file.originalname,
    newStudent.encoding = req.file.encoding,
    newStudent.mimetype = req.file.mimetype,
    newStudent.id = req.file.id,
    newStudent.filename = req.file.filename,
    newStudent.metadata = req.file.metadata,
    newStudent.bucketName = req.file.bucketName,
    newStudent.chunkSize = req.file.chunkSize,
    newStudent.size = req.file.size,
    newStudent.md5 = req.file.md5,
    newStudent.uploadDate = req.file.uploadDate,
    newStudent.contentType = req.file.contentType
  
    newStudent.save((err, doc) => {
      if (err) {
        console.log(err);
      }
      console.log(doc);
      res.send(doc);
    });

    // const newUser = new SignUpStudent({
    //   file: req.file,
    //   fullName,
    //   email,
    //   address,
    //   city,
    //   state,
    //   schoolID,
    //   studentPhoneNumber,
    //   mothersName,
    //   fathersName,
    //   fathersPhoneNumber,
    //   mothersPhoneNumber,
    //   primaryContact,
    //   gender,
    //   race
    // });
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // db.collection("students", (err, collection) => {
    //   collection.findOne({
    //     email: email
    //   }).then((user) => {
    //     if (user) {
    //       console.log("User Already Exists.");
    //       res.json({ message: "Student Already Exists." })
    //     } else {
    //       console.log("User DOESN'T exist!")
    //       newUser.save((err, data) => {
    //         if (err) {
    //           console.log("This is the error when saving student :", err);
    //         } else {
    //           res.json({ message: "Student Successfully Added!" })
    //           console.log("This is the correct saved data :", data);
    //         }
    //       })  
    //     }
    //   }).catch((err) => {
    //     console.log(err);
    //   }); 
    // });
  });
});

module.exports = router;



