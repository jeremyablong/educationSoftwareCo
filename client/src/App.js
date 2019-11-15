import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import SideNavigation from "./components/navigation/home/index.js";
import Landing from "./components/landing.js";
import MainLanding from "./components/core/landing/main.js";
import { connect } from "react-redux";
import RegisterStudent from "./components/registerStudent/register/index.js";


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
