import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';
import "./style.css";
import axios from "axios";
import { connect } from "react-redux";
import Modal from 'react-modal';
import MainDashboard from "../../dashboard/main.js";

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    maxHeight             : "calc(100vh - 210px)",
    maxHeight             : "100%"
  }
};

class Jumbo extends Component {
constructor () {
  super();

  this.state = {
    code: "",
    modalIsOpen: false,
    data: []
  }
}
  openModal = () => {
    this.setState({
      modalIsOpen: true
    });
  }
 
  afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
  }
 
  closeModal = () => {
    this.setState({ 
      modalIsOpen: false
    });
  }
  renderFormSubmit = () =>{
    console.log("submiited.", this.state.code);
    if (this.state.code.length > 4) {
      axios.post("/grant/referral/token", {
        email: this.props.email,
        code: this.state.code
      }).then((res) => {
        this.setState({
          code: "You have successfully created a unique ID, You can send this to refer other teachers!"
        })
        console.log(res.data);
      }).catch((err) => {
        console.log(err);
      })
    } else {
      alert("Please enter a registration code greater than 4 charectors.")
    }
  }
  renderReferralCodes = () => {
    axios.post("/gather/referral/all", {
      code: this.state.code,
      email: this.props.email
    }).then((res) => {
      this.openModal()
      console.log("/grant/referral/token res.data:", res.data);
      this.setState({
        data: res.data
      })
    }).catch((err) => {
      console.log(err);
    })
  }
  renderModal = () => {
    return (
      <div style={{ backgroundColor: "black" }}> 
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
        <div className="background_black">
        <h1 className="text-center">Here is a list of your generated referral codes!</h1>
        <ul id="overflow" className="list-group">
          {this.state.data.map((item, index) => {
            return item.code.reverse().map((i, x) => {
              console.log(i);
              return (
                <li className="list-group-item disabled"><b>Code:</b> {i}</li>
              );
            })
          })}
        </ul>
        <hr style={{ paddingBottom: "20px" }}/>
        </div>
        </Modal>
      </div>
    );
  }
  render () {
    console.log("This.state - dashboard :", this.state);
    return (
      <div className="container">
        <div style={{ marginTop: 30 }} className="row">
          <div className="col-md-8">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span style={{ width: "100%" }} className="input-group-text" id="basic-addon1">Registration Code</span>
            </div>
              <input onChange={(e) => {
                this.setState({
                  code: e.target.value
                })
              }} value={this.state.code} type="text"  className="form-control" placeholder="Create & Send Referral Code To Other Teachers To Register" aria-label="code" aria-describedby="basic-addon1" />
            </div>
            </div>
            <div className="col-md-4">
            <button onClick={this.renderFormSubmit} className="btn btn-outline-info">Create Code & Register New Teachers</button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            {this.renderModal()}
            <button style={{ width: "100%", marginTop: "20px" }} onClick={this.renderReferralCodes} className="btn btn-outline-success">Gather Personally Generated Referal Codes</button>
            <MainDashboard />
          </div>
        </div>
      </div>
    );
  }
};


const mapStateToProps = (state) => {
  return {
    email: state.bio.data.email
  }
}

export default connect(mapStateToProps, {  })(Jumbo);