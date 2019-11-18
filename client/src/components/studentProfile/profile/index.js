import React, { Component } from 'react';
import "../style.css";
import { Link } from "react-router-dom";
import ReactList from 'react-list';


class ProfileMainSub extends Component {
constructor () {
	super();

	this.state = {
		data: [],
		passDownData: null
	}
}

	componentDidMount () {
		this.setState({
			passDownData: this.props.passDown
		}, () => {
			console.log("passDownData: ", this.state.passDownData)
		})
		// const { address, city, email, fathersName, fathersPhoneNumber, fullName, gender, originalname, mothersPhoneNumber, mothersName, primaryContact, race, schoolID, state, studentPhoneNumber } = null;
	}
	renderContent = () => {
		const { passDown } = this.props;
		if (!passDown) {
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
			return (
				<div>
					<div class="jumbotron jumbotron_student">
					  <h1 class="text-white"><b className="student">Student:</b> {passDown.fullName}</h1>
					 <div className="container-fluid">
						<div className="row">
							<div className="col-md-6">
	 						<ul className="list">
								
								<li className="list_item"><b>Student Phone #</b>: {passDown.studentPhoneNumber}</li>
								<li className="list_item"><b>Mother's Name</b>: {passDown.mothersName}</li>
								<li className="list_item"><b>Mother's Phone #</b>: {passDown.mothersPhoneNumber}</li>
								<li className="list_item"><b>Father's Name</b>: {passDown.fathersName}</li>
								<li className="list_item"><b>Father's Phone #</b>: {passDown.fathersPhoneNumber}</li>
								<li className="list_item"><b>Primary Contact</b>: {passDown.primaryContact}</li>
							  </ul>
							</div>
							<div className="col-md-6">
								<ul className="list list_two">
									<li className="list_item"><b>School Unique ID</b>: {passDown.schoolID}</li>
									<li className="list_item"><b>Address</b>: {passDown.address}</li>
									<li className="list_item"><b>City</b>: {passDown.city}</li>
									<li className="list_item"><b>State</b>: {passDown.state}</li>
									<li className="list_item"><b>Ethnicity</b>: {passDown.race}</li>
									<li className="list_item"><b>Gender</b>: {passDown.gender}</li>
									<li className="list_item"><b>School Email</b>: {passDown.email}</li>
									{/*<li className="list_item"><b>Father's Name</b>: {passDown.fathersName}</li>
									<li className="list_item"><b>Father's Phone #</b>: {passDown.fathersPhoneNumber}</li>
									<li className="list_item"><b>School Unique ID</b>: {passDown.schoolID}</li>*/}
								</ul>
							</div>
						</div>
					 </div>
					  <img style={{ borderRadius: "70px", maxHeight: "225px", maxWidth: "225px", marginBottom: "-140px" }} src={require(`../../../public/uploads/${passDown.originalname}`)} alt="apple"/>
			        </div>
					  {/*<p class="lead text-white"><b>Email:</b> {passDown.email}</p>
					  <p className="lead text-white">Ethnicity: {passDown.race}</p>
					  <p className="lead text-white">Student Phone #: {passDown.studentPhoneNumber}</p>
					  <p className="lead text-white">Mother's Phone #: {passDown.mothersPhoneNumber}</p>
					  <p className="lead text-white">Father's Phone #: {passDown.fathersPhoneNumber}</p>
					  <p className="lead text-white">Ethnicity: {passDown.race}</p>
					  <p class="lead text-white">School Unique ID: {passDown.schoolID}</p>
					  <p className="lead text-right"></p>
					  <p class="lead text-white">
					    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
					  </p>*/}
					  
					</div>
			
			);
		// })
		}
	}
	render() {
		return (
			<div>
				{this.renderContent()}
				<div className="container-fluid">

				</div>
			</div>
		);
	}
}
export default ProfileMainSub;