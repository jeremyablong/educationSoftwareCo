import React, { Component } from 'react';
import "../style.css";
import DatePicker from 'react-date-picker';
import axios from "axios";
import { withRouter } from "react-router-dom";
import { authenticated, accountBio } from "../../../actions/index.js";
import { connect } from "react-redux";
import { compose } from "redux";
import { gatherCodes } from "../../../actions/login/login.js";


class Login extends Component {
constructor () {
	super();

	this.state = {
		showLogin: false,
		date: new Date(),
		streetAddress: "",
		zipCode: "",
		city: "",
		state: "",
		password: "",
		passwordConfirm: "",
		fullName: "",
		gender: "",
		email: "",
		code: "",
		count: 0,
		error: "",
		exists: false
	}
}

	onChange = (date) => {
		this.setState({
			date
		})
	}
	componentDidMount () {
		axios.get("/login/request/codes").then((res) => {
	      	this.setState({
	      		codes: res.data
	      	})
	      	console.log(res.data)
	    }).catch((err) => {
	    	console.log(err);
	    });
	}
	logIn = (e) => {
		e.preventDefault();
		console.log("Login clicked.");
		axios.post("/login", {
			email: this.state.email,
			password: this.state.password
		}).then((res) => {
			if (res.data.message === "There is a MATCH" && res.data.data) {
				this.props.history.push("/homepage");
				this.props.authenticated(true);
				this.props.accountBio(res.data.data);
			} else {
				alert("Please Enter Valid Credentials.")
			}
		}).catch((err) => {
			console.log(err);
		})
	}
	renderSubmit = (e) => {
		e.preventDefault();

		const { streetAddress, zipCode, city, state, password, passwordConfirm, fullName, gender, email } = this.state;
		
		if (this.state.codes) {
			return this.state.codes.map((item, index) => {
				if (item.code) {
					return item.code.map((i, x) => {
						if (i === this.state.code) {
							if (streetAddress.length > 0 && zipCode.length > 0 && city.length > 0 && state.length > 0 && password.length > 0 && passwordConfirm.length > 0 && fullName.length > 0 && gender.length > 0 && email.length > 0) {
									axios.post("/register", {
										birthdate: this.state.date,
										streetAddress: this.state.streetAddress,
										zipCode: this.state.zipCode,
										city: this.state.city,
										state: this.state.state,
										passwordConfirm: this.state.passwordConfirm,
										fullName: this.state.fullName,
										gender: this.state.gender,
										email: this.state.email
									}).then((res) => {
										if (res.data.message === "User Already Exists.") {
											if (this.state.exists === false) {
												alert("User Already Exists.")
											}
											this.setState({
												exists: true
											})
										} else if (res.data.message === "User Successfully Added!") {
											alert("You Have Successfully Registered!");
											this.setState({
												streetAddress: "",
												zipCode: "",
												city: "",
												state: "",
												password: "",
												passwordConfirm: "",
												fullName: "",
												gender: "",
												email: "",
												error: ""
											})
										}
									}).catch((err) => {
										console.log(err);
									});

									axios.post("/remove/access/token", {
										code: this.state.code
									}).then((res) => {
										console.log("/remove/access/token:", res.data);
									}).catch((err) => {
										console.log(err);
									})
							} else {
								alert("Please complete every field.")
							}
						} else {
							this.setState({
								error: "unfortunately your registration code does not match any of our saved referal codes."
							})
						}
					})
				}
			})
		}
	}
	renderContent = () => {
		if (this.state.showLogin === false) {
			return (
				<div className="card" >
					<div className="card-header">
						<h3 style={{ paddingTop: 27 }}>FACULTY SIGN-IN</h3>
							<div className="d-flex justify-content-end social_icon">
								<span><i className="fab fa-facebook-square"></i></span>
								<span><i className="fab fa-google-plus-square"></i></span>
								<span><i className="fab fa-twitter-square"></i></span>
							</div>
						</div>
						<div className="card-body">
					<form onSubmit={this.logIn}>
						<div className="input-group form-group">
							<div className="input-group-prepend">
								<span className="input-group-text"><i className="fas fa-user"></i></span>
							</div>
							<input onChange={(e) => {
								this.setState({
									email: e.target.value
								})
							}} type="text" value={this.state.email} className="form-control" name="sign_in_email" placeholder="Email" />
							
						</div>
						<div className="input-group form-group">
							<div className="input-group-prepend">
								<span className="input-group-text"><i className="fas fa-key"></i></span>
							</div>
							<input onChange={(e) => {
								this.setState({
									password: e.target.value
								})
							}} type="password" value={this.state.password} className="form-control" name="sign_in_password" placeholder="password" />
						</div>
						<div className="row align-items-center remember">
							<input type="checkbox" />Remember Me
						</div>
						<div className="form-group">
							<input type="submit" value="Login" className="btn float-right login_btn" />
						</div>
					</form>
				</div>
				<div className="card-footer">
					<button onClick={() => {
							this.setState({
								showLogin: true
							})
						}} className="btn btn-info">
						Register Today
					</button>
					<button style={{ marginLeft: 30 }} className="btn btn-danger">Forgot Your Password?</button>
					</div>
				</div>
			);
		} else if (this.state.showLogin === true) {
			// birthdate and gender
			return (
				<div className="card">
					<div className="card-header">
						<h3 style={{ paddingTop: 27 }}>FACULTY SIGN-UP</h3>
						{this.state.password === this.state.passwordConfirm ? null : <p style={{ color: "red", marginBottom: -30 }}>Passwords Must Match</p>}
						{this.state.error !== "" ? <h5 style={{ color: "red" }}> {this.state.error} </h5> : null}
							<div className="d-flex justify-content-end social_icon">
								<span><i className="fab fa-facebook-square"></i></span>
								<span><i className="fab fa-google-plus-square"></i></span>
								<span><i className="fab fa-twitter-square"></i></span>
							</div>
						</div>
						<div className="card-body">
					<form onSubmit={this.renderSubmit}>
						<div className="input-group form-group">
							<input onChange={(e) => {
								this.setState({
									code: e.target.value
								})
							}} type="text" value={this.state.code} className="form-control red_input" name="sign_in_email" placeholder="ENTER YOUR REGISTRATION CODE" />
							
						</div>
						<div className="input-group form-group">
							<div className="input-group-prepend">
								<span className="input-group-text"><i className="fas fa-user"></i></span>
							</div>
							<input onChange={(e) => {
								this.setState({
									fullName: e.target.value
								})
							}} type="text" value={this.state.fullName} className="form-control" name="fullName" placeholder="Full Name" />
							
						</div>
						<div className="input-group form-group">
							<div className="input-group-prepend">
								<span className="input-group-text"><i className="fas fa-envelope-square"></i></span>
							</div>
							<input onChange={(e) => {
								this.setState({
									email: e.target.value
								})
							}} type="text" value={this.state.email} className="form-control" name="email" placeholder="Email Address" />
							
						</div>
						<div className="input-group form-group">
							<div className="input-group-prepend">
								<span className="input-group-text"><i className="fas fa-key"></i></span>
							</div>
							<input onChange={(e) => {
								this.setState({
									password: e.target.value
								})
							}} type="password" value={this.state.password} className="form-control" name="password" placeholder="password" />
						</div>
						<div className="input-group form-group">
							<div className="input-group-prepend">
								<span className="input-group-text"><i className="fas fa-key"></i></span>
							</div>
							<input type="password" value={this.state.passwordConfirm} name="passwordConfirm" className="form-control" placeholder="Password Confirm" onChange={(e) =>  {
								this.setState({
									passwordConfirm: e.target.value
								})
							}} />

						</div>

						<div className="input-group form-group">
							<div className="input-group-prepend">
								<span className="input-group-text"><i className="fas fa-user"></i></span>
							</div>
							<input onChange={(e) => {
								this.setState({
									streetAddress: e.target.value
								})
							}} type="text" value={this.state.streetAddress} className="form-control" name="streetAddress" placeholder="Street Address" />
							
						</div>
						<div className="input-group form-group">
							<div className="input-group-prepend">
								<span className="input-group-text"><i className="fas fa-road"></i></span>
							</div>
							<input onChange={(e) => {
								this.setState({
									city: e.target.value
								})
							}} type="text" value={this.state.city} className="form-control" name="city" placeholder="City" />
						</div>
						<div className="input-group form-group">
							<div className="input-group-prepend">
								<span className="input-group-text"><i className="fas fa-flag-usa"></i></span>
							</div>
							<input onChange={(e) => {
								this.setState({
									state: e.target.value
								})
							}} type="text" value={this.state.state} className="form-control" name="state" placeholder="State" />
							
						</div>
						
						<div className="input-group form-group">
							<input onChange={(e) => {
								this.setState({
									zipCode: e.target.value
								})
							}} type="text" value={this.state.zipCode} className="form-control" name="zipCode" placeholder="Zip Code" />
						</div>
						<div className="input-group mb-3" style={{ width: "100%" }}>
						 
						  <select onChange={(e) => {
						  	this.setState({
						  		gender: e.target.value
						  	})
						  }} className="custom-select" value={this.state.gender} id="inputGroupSelect01">
						    <option selected>Choose Your Gender...</option>
						    <option value="Male">Male</option>
						    <option value="Female">Female</option>
						    <option value="Prefer To Not Answer">Prefer To Not Answer</option>
						  </select>
						</div>
					<label htmlFor="birthdate" style={{ color: "white" }}>Choose Your Birthdate</label>
					<div style={{ backgroundColor: "white", width: "45%"}}>
					
						<DatePicker
				          onChange={this.onChange}
				          value={this.state.date} 
				          name="birthdate"
				        />
					</div>
						<div className="form-group">
							<button type="submit" value="Register Today" className="btn float-right login_btn" > Register Today</button>
						</div>

					</form>
				</div>
				<div className="card-footer">
					<button onClick={() => {
							this.setState({
								showLogin: false
							})
						}} className="btn btn-info">
						Login In
					</button>
					<button style={{ marginLeft: 30 }} className="btn btn-danger">Forgot Your Password?</button>
					</div>
				</div>
			);
		}
	}
	render() {
		if (this.state.count === 0) {
			axios.get("/login/request/codes").then((res) => {
		      	this.setState({
		      		codes: res.data
		      	})
		      	console.log(res.data)
		    }).catch((err) => {
		    	console.log(err);
		    });

		    this.setState({
				count: this.state.count + 1
		    })
		}
		console.log(this.state)
		return (
			<div className="background">							
				<div className="container-fluid" style={{ paddingTop: 100, paddingBottom: 100 }}>
					<div className="d-flex justify-content-center h-100">
						{this.renderContent()}
					</div>
				</div>
			</div>
		);
	}
}
export default compose(withRouter, connect(null, { authenticated, accountBio, gatherCodes }))(Login);