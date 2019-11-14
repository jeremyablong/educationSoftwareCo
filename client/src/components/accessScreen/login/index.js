import React, { Component } from 'react';
import "../style.css";
import DatePicker from 'react-date-picker';
import axios from "axios";
import { withRouter } from "react-router-dom";
import { authenticated } from "../../../actions/index.js";
import { connect } from "react-redux";
import { compose } from "redux";


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
		gender: ""
	}
}

	onChange = (date) => {
		this.setState({
			date
		})
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
			}
		}).catch((err) => {
			console.log(err);
		})
	}
	register = () => {

	}
	renderContent = () => {
		if (this.state.showLogin === false) {
			return (
				<div className="card" >
					<div className="card-header">
						<h3>Sign In</h3>
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
							}} type="text" className="form-control" name="sign_in_email" placeholder="Email" />
							
						</div>
						<div className="input-group form-group">
							<div className="input-group-prepend">
								<span className="input-group-text"><i className="fas fa-key"></i></span>
							</div>
							<input onChange={(e) => {
								this.setState({
									password: e.target.value
								})
							}} type="password" className="form-control" name="sign_in_password" placeholder="password" />
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
						<h3>Sign *Up*</h3>
							<div className="d-flex justify-content-end social_icon">
								<span><i className="fab fa-facebook-square"></i></span>
								<span><i className="fab fa-google-plus-square"></i></span>
								<span><i className="fab fa-twitter-square"></i></span>
							</div>
						</div>
						<div className="card-body">
					<form>
						<div className="input-group form-group">
							<div className="input-group-prepend">
								<span className="input-group-text"><i className="fas fa-user"></i></span>
							</div>
							<input onChange={(e) => {
								this.setState({
									fullName: e.target.value
								})
							}} type="text" className="form-control" name="fullName" placeholder="Full Name" />
							
						</div>
						<div className="input-group form-group">
							<div className="input-group-prepend">
								<span className="input-group-text"><i className="fas fa-key"></i></span>
							</div>
							<input onChange={(e) => {
								this.setState({
									password: e.target.value
								})
							}} type="password" className="form-control" name="password" placeholder="password" />
						</div>
						<div className="input-group form-group">
							<div className="input-group-prepend">
								<span className="input-group-text"><i className="fas fa-key"></i></span>
							</div>
							<input type="password" name="passwordConfirm" className="form-control" placeholder="Password Confirm" onChange={(e) =>  {
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
							}} type="text" className="form-control" name="streetAddress" placeholder="Street Address" />
							
						</div>
						<div className="input-group form-group">
							<div className="input-group-prepend">
								<span className="input-group-text"><i className="fas fa-key"></i></span>
							</div>
							<input onChange={(e) => {
								this.setState({
									city: e.target.value
								})
							}} type="password" className="form-control" name="city" placeholder="City" />
						</div>
						<div className="input-group form-group">
							<div className="input-group-prepend">
								<span className="input-group-text"><i className="fas fa-user"></i></span>
							</div>
							<input onChange={(e) => {
								this.setState({
									state: e.target.value
								})
							}} type="text" className="form-control" name="state" placeholder="State" />
							
						</div>
						
						<div className="input-group form-group">
							<input onChange={(e) => {
								this.setState({
									zipCode: e.target.value
								})
							}} type="text" className="form-control" name="zipCode" placeholder="Zip Code" />
						</div>
						<div className="input-group mb-3" style={{ width: "100%" }}>
						 
						  <select onChange={(e) => {
						  	this.setState({
						  		gender: e.target.value
						  	})
						  }} className="custom-select" id="inputGroupSelect01">
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
export default compose(withRouter, connect(null, { authenticated }))(Login);