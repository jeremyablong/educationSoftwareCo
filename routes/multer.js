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
// const multer = require("multer");
const GridFsStorage = require('multer-gridfs-storage');


const storage = multer.diskStorage({
   destination: "./public/uploads/",
   filename: function(req, file, cb){
      cb(null,"IMAGE-" + Date.now() + path.extname(file.originalname));
   }
});

const upload = multer({
   storage: storage,
   limits:{
    fileSize: 100000000
  },
});


mongo.connect(config.get("mongoURI"),  { useNewUrlParser: true }, { useUnifiedTopology: true }, cors(), (err, db) => {
  router.post("/", upload.single("image"), (req, res) => {
        console.log("Request ---", req.body);
        console.log("Request file ---", req.file);
  });
});

module.exports = router;



