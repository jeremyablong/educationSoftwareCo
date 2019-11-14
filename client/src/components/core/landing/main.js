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
				<div class="notfound-bg"></div>
				<div class="notfound">
					<div class="notfound-404">
						<h1>404</h1>
					</div>
					<h2>Oops! Page Not Found</h2>
					<form class="notfound-search">
						<input type="text" placeholder="Search..." />
						<button type="button">Search</button>
					</form>
					<div class="notfound-social">
						<a><i class="fa fa-facebook"></i></a>
						<a><i class="fa fa-twitter"></i></a>
						<a><i class="fa fa-pinterest"></i></a>
						<a><i class="fa fa-google-plus"></i></a>
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