import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import SideNavigation from "./components/navigation/home/index.js";
import Landing from "./components/landing.js";
import MainLanding from "./components/core/landing/main.js";
import { connect } from "react-redux";
import RegisterStudent from "./components/registerStudent/register/index.js";
import MainStudentProfile from "./components/studentProfile/main.js";
import ClassDash from "./components/classDashboard/dash/index.js";
import TeacherList from "./components/teacherSocial/teacherList/index.js";
import TeacherProfile from "./components/teacherSocial/socialLanding/teacherProfile.js";

class App extends Component {
constructor () {
  super();


}
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          {this.props.auth === true ? <Route exact path="/" component={MainLanding} /> : <Route exact path="/" component={Landing} /> }
          <Route exact path="/homepage" component={MainLanding} />
          {this.props.auth === true ? <Route exact path="/enrollment/new/student" component={RegisterStudent} /> : null}
          {this.props.auth === true ? <Route exact path="/view/student/profile" component={MainStudentProfile}/> : null}
          {this.props.auth === true ? <Route exact path="/teachers/list" component={TeacherList} /> : null}
          {this.props.auth === true ? <Route exact path="/view/teacher/profile" component={TeacherProfile} /> : null}
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.authenticated.data
  }
}

export default connect(mapStateToProps, {  })(App);
