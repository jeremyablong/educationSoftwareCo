import React, { Component } from 'react';

class MainStudentProfile extends Component {
constructor (props) {
	super(props);

	this.state = {
		data: []
	}
}
	render() {
		console.log("this is the this.propsssssss :", this.props);
		return (
			<div>
				<h1 className="text-center"> MainStudentProfile </h1>
			</div>
		);
	}
}
export default MainStudentProfile;