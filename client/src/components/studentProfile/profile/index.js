import React, { Component } from 'react';
import "../style.css";
import { Link } from "react-router-dom";



class ProfileMainSub extends Component {
constructor () {
	super();

	this.state = {
		data: []
	}
}

	componentDidMount () {
		
		// const { address, city, email, fathersName, fathersPhoneNumber, fullName, gender, originalname, mothersPhoneNumber, mothersName, primaryContact, race, schoolID, state, studentPhoneNumber } = null;
	}
	renderContent = () => {
		const { passDown } = this.props;
		if (!this.props.passDown) {
			return (
			    <section class="error_section">
			      <p class="error_section_subtitle">Opps Page is not available - Please navigate back home and try again !</p>
			      <h1 class="error_title">
			        <p>404</p>
			        404
			      </h1>
			      <Link to="/" class="btn">Back to home</Link>
			    </section>
			);
		} else {
			// return this.props.passDown.map((i, index) => {
				return (
					<div>
						<div class="jumbotron jumbotron_student">
						  <h1 class="text-white"><b>Student Name:</b> {passDown.fullName}</h1>
						  <p class="lead text-white"><b>Email:</b> {passDown.email}</p>
						  <hr class="my-4" />
						  <p class="lead text-white">School Unique ID: {passDown.schoolID}</p>
						  <p className="lead text-right"></p>
						  <p class="lead text-white">
						    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
						  </p>
						  <img style={{ borderRadius: "70px", maxHeight: "225px", maxWidth: "225px", marginBottom: "-140px" }} src={require(`../../../public/uploads/${passDown.originalname}`)} alt="apple"/>
						</div>
					</div>
				);
			// })
		}
	}
	render() {
		return (
			<div>
				{this.renderContent()}
			</div>
		);
	}
}
export default ProfileMainSub;