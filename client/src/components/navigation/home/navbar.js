import React, { useState, Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button, 
  Popover, 
  PopoverHeader, 
  PopoverBody } from 'reactstrap';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { authenticated } from "../../../actions/index.js";
import "../style.css";
import { withRouter } from "react-router";
import { compose } from "redux";
import 'react-chat-elements/dist/main.css'
import { ChatItem } from 'react-chat-elements';


class Navigation extends Component {
constructor (props) {
  super(props);

  this.state = {
    isOpen: false,
    popoverOpen: false
  }
}

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  toggle = () => {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    })
  }
  render () {
    console.log("this.props.match.path :", this.props.match.path)
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Schooling4everyone</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <NavItem className="link">
                <a style={{ color: "black" }}><i style={{ marginRight: "20px", marginBottom: "5px" }} id="Popover1" className="far fa-comments fa-2x">
                <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
                  <PopoverHeader>View Your Messages</PopoverHeader>
                  <PopoverBody>
                  <ChatItem
                    avatar={require("../../../images/apple.jpg")}
                    alt={'Reactjs'}
                    title={'Facebook'}
                    subtitle={'What are you doing?'}
                    date={new Date()}
                    unread={0} />
                    <ChatItem
                    avatar={require("../../../images/daylight.jpg")}
                    alt={'Reactjs'}
                    title={'Instagram'}
                    subtitle={"What're you getting into today?"}
                    date={new Date()}
                    unread={0} />
                    <ChatItem
                    avatar={require("../../../images/apple.jpg")}
                    alt={'Reactjs'}
                    title={'Welcome!'}
                    subtitle={'Whats up homie!'}
                    date={new Date()}
                    unread={0} />
                    <ChatItem
                    avatar={require("../../../images/bridge.jpg")}
                    alt={'Reactjs'}
                    title={'Hello, John!'}
                    subtitle={'Heyyyy!'}
                    date={new Date()}
                    unread={0} />
                  </PopoverBody>
                </Popover>
                </i></a>
              </NavItem>
            <NavItem>
                <Link onClick={() => {
                  this.props.authenticated(false);
                  this.props.history.push("/");
                }} className="btn btn-danger">SIGN-OUT</Link>
              </NavItem>
              
              
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Admissions/Enrollment
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <Link style={{ color: "black" }} to="/enrollment/new/student">Register New Students</Link>
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Teachers
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <Link style={{ color: "black" }} to="/teachers/list"> Teacher's List </Link>
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Faculty
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Academics
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

// export default withRouter(connect(null, { authenticated })(Navigation));
export default compose(withRouter, connect(null, { authenticated }))(Navigation);