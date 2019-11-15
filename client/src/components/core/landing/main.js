import React, { Component } from 'react';
import SideNavigation from "../../navigation/home/index.js";
import { connect } from "react-redux";
import "./style.css";
import { Link } from "react-router-dom";

class MainLanding extends Component {
constructor () {
	super();


}
	renderContent = () => {
		return (
			<div id="notfound">
				<div className="notfound-bg"></div>
				<div className="notfound">
					<div className="notfound-404">
						<h1>404</h1>
					</div>
					<h2>Oops! This page is restricted.</h2>
					<form className="notfound-search">
						<input type="text" placeholder="Search..." />
						<button type="button">Search</button>
					</form>
					<div className="notfound-social">
						<a><i className="fa fa-facebook"></i></a>
						<a><i className="fa fa-twitter"></i></a>
						<a><i className="fa fa-pinterest"></i></a>
						<a><i className="fa fa-google-plus"></i></a>
					</div>
					<Link to="/" className="btn btn-info">Back To Homepage</Link>
				</div>
			</div>
		);
	}
	render() {	
		return (
			<div>
				{this.props.auth === true ? <SideNavigation /> : this.renderContent()}
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		auth: state.authenticated.data
	}
}
export default connect(mapStateToProps, { })(MainLanding);