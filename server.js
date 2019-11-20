const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoDB = require("./config/db.js");
const cors = require("cors");
const path = require("path");

mongoDB();

app.use(bodyParser.json({
	limit:'50mb'
})); 

app.use(bodyParser.urlencoded({
	extended:true, limit:'50mb', parameterLimit: 1000000
}));

// app.use(bodyParser.json());



app.use("/register", require("./routes/registration/register/index.js"));
app.use("/login", require("./routes/auth/login/index.js"));
app.use("/grant/referral/token", require("./routes/referrals/referFaculty/index.js"));
app.use("/gather/referral/all", require("./routes/referrals/referFaculty/gatherReferrals.js"));
app.use("/login/request/codes", require("./routes/auth/login/loginGetReferral.js"));
app.use("/remove/access/token", require("./routes/auth/login/remove.js"));
app.use("/register/student", require("./routes/students/registerStudent/register.js"));
app.use("/find/all/students", require("./routes/students/findAllStudents.js"));
app.use("/upload/student/photo", require("./routes/multer.js"));
app.use("/post/student", require("./routes/agenda/newData/index.js"))
app.use("/gather/agenda/home", require("./routes/agenda/gather/index.js"));
app.use("/gather/teacher/data", require("./routes/teachers/teacherList/gatherTeachers.js"));
app.use("/post/newsfeed", require("./routes/social/teacherProfile/social.js"));
app.use("/gather/newsfeed/individual", require("./routes/social/teacherProfile/timelineGather.js"));
app.use("/gather/photos/students", require("./routes/images/gatherImages.js"));

app.get('/*', cors(), function(_, res) {
  res.sendFile(__dirname, './client/build/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    };
  };
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});

if (process.env.NODE_ENV === "production") {
	// Express will serve up production files
	app.use(express.static("client/build"));
	// serve up index.html file if it doenst recognize the route
	app.get('*', cors(), function(_, res) {
	  res.sendFile(__dirname, './client/build/index.html'), function(err) {
	    if (err) {
	      res.status(500).send(err)
	    }
	  }
	})
	app.get('/*', cors(), function(_, res) {
	  res.sendFile(path.join(__dirname, './client/build/index.html'), function(err) {
	    if (err) {
	      res.status(500).send(err)
	    }
	  })
	})
}; 

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}!`);
});