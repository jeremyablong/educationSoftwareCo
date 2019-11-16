import React, { Component } from 'react';
import ImageUploader from 'react-images-upload';
import axios from "axios";

class RegisterHelper extends Component {
constructor () {
	super();

	this.state = {
		file: null,
		fullName: "",
		email: "",
		address: "",
		city: "",
		state: "",
		schoolID: "",
		studentPhoneNumber: "",
		mothersName: "",
		fathersName: "",
		fathersPhoneNumber: "",
		mothersPhoneNumber: "",
		primaryContact: "",
		gender: "",
		race: ""
	}
}
    onDrop = (e) => {
       this.setState({
       		file: e.target.files[0]
       })	
    }
  //   renderSubmit = (e) => {

		// e.preventDefault();

		// const { email, fullName, address, city, state, schoolID, studentPhoneNumber, mothersName, fathersName, fathersPhoneNumber, mothersPhoneNumber, primaryContact, gender, race } = this.state;

		// if (email, fullName, address, city, state, schoolID, studentPhoneNumber, mothersName, fathersName, fathersPhoneNumber, mothersPhoneNumber, primaryContact, gender, race) {
	 //    	axios.post("/register/student", {
	 //    		email,
	 //    		fullName,
		// 		address,
		// 		city,
		// 		state,
		// 		schoolID,
		// 		studentPhoneNumber,
		// 		mothersName,
		// 		fathersName,
		// 		fathersPhoneNumber,
		// 		mothersPhoneNumber,
		// 		primaryContact,
		// 		gender,
		// 		race
	 //    	}).then((res) => {
	 //    		console.log("/register/student res.data :", res.data);
	 //    		alert(res.data.message);
	 //    	}).catch((err) => {
	 //    		console.log(err);
	 //    	})
		// } else {
		// 	alert("Please complete all the fields.")
		// }

    	
  //   	console.log("submitted :", this.state);
  //   }
  renderSubmit = (e) =>	{
  	e.preventDefault();
	// console.log(this.state.pictures[0])
  	// axios.post("/upload/student/photo", this.state.pictures).then((res) => {
  	// 	console.log(res.data);
  	// }).catch((err) => {
  	// 	console.log(err);
  	// })
		const formData = new FormData();

        formData.append('image', this.state.file);

        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };

        axios.post("/upload/student/photo", formData, config)
	        .then((response) => {
	            alert("The file is successfully uploaded");
	    }).catch((error) => {
	        	console.log(error);
	    });
  }
	render() {
		return (
			<div>
				<div className="container-fluid">
				<form onSubmit={this.renderSubmit} method="POST" action="/" enctype="multipart/form-data">
					<div className="row">
						<div className="col-md-6">
							<div class="input-group mb-3">
							  <div class="input-group-prepend">
							    <span class="input-group-text" id="inputGroup-sizing-default" style={{ width: "100%" }}>Full Name</span>
							  </div>
							  <input onChange={(e) => {
							  	this.setState({
									fullName: e.target.value
							  	})
							  }} type="text" class="form-control" name="fullName" aria-label="Default" placeholder="Enter Students Full Name" aria-describedby="inputGroup-sizing-default" />
							</div>
						</div>
						<div className="col-md-6">
							<div class="input-group mb-3">
							  <div class="input-group-prepend">
							    <span class="input-group-text" id="inputGroup-sizing-default" style={{ width: "100%" }}>Student Email</span>
							  </div>
							  <input onChange={(e) => {
							  	this.setState({
									email: e.target.value
							  	})
							  }} type="text" class="form-control" name="email" aria-label="Default" placeholder="Enter Students Email" aria-describedby="inputGroup-sizing-default" />
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12">
							<div class="input-group mb-3">
							  <div class="input-group-prepend">
							    <span class="input-group-text" id="inputGroup-sizing-default" style={{ width: "100%" }}>Student Address</span>
							  </div>
							  <input onChange={(e) => {
							  	this.setState({
									address: e.target.value
							  	})
							  }} type="text" class="form-control" name="address" aria-label="Default" placeholder="Enter Students Address" aria-describedby="inputGroup-sizing-default" />
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6">
							<div class="input-group mb-3">
							  <div class="input-group-prepend">
							    <span class="input-group-text" id="inputGroup-sizing-default" style={{ width: "100%" }}>City</span>
							  </div>
							  <input onChange={(e) => {
							  	this.setState({
									city: e.target.value
							  	})
							  }} type="text" class="form-control" name="city" name="city" placeholder="Enter Students City" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
							</div>
						</div>
						<div className="col-md-6">
							<div class="input-group mb-3">
							  <div class="input-group-prepend">
							    <span class="input-group-text" id="inputGroup-sizing-default" style={{ width: "100%" }}>State</span>
							  </div>
							  <input onChange={(e) => {
							  	this.setState({
									state: e.target.value
							  	})
							  }} type="text" class="form-control" name="state" aria-label="Default" placeholder="Enter Students State" aria-describedby="inputGroup-sizing-default" />
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6">
							<div class="input-group mb-3">
							  <div class="input-group-prepend">
							    <span class="input-group-text" id="inputGroup-sizing-default" style={{ width: "100%" }}>Student School ID</span>
							  </div>
							  <input onChange={(e) => {
							  	this.setState({
									schoolID: e.target.value
							  	})
							  }} type="text" class="form-control" name="schoolID" name="schoolID" aria-label="Default" placeholder="*IMPORTANT* - Enter Students Correct ID" aria-describedby="inputGroup-sizing-default" />
							</div>
						</div>
						<div className="col-md-6">
							<div class="input-group mb-3">
							  <div class="input-group-prepend">
							    <span class="input-group-text" id="inputGroup-sizing-default" style={{ width: "100%" }}>Student Phone Number</span>
							  </div>
							  <input onChange={(e) => {
							  	this.setState({
									studentPhoneNumber: e.target.value
							  	})
							  }} type="text" class="form-control" name="studentPhoneNumber" aria-label="Default" placeholder="Enter Students Phone Number" aria-describedby="inputGroup-sizing-default" />
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12">
							<div class="input-group mb-3">
							  <div class="input-group-prepend">
							    <span class="input-group-text" id="inputGroup-sizing-default" style={{ width: "100%" }}>Students Mothers Name</span>
							  </div>
							  <input onChange={(e) => {
							  	this.setState({
									mothersName: e.target.value
							  	})
							  }} type="text" class="form-control" name="mothersName" placeholder="Enter Students Mother's Name" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12">
							<div class="input-group mb-3">
							  <div class="input-group-prepend">
							    <span class="input-group-text" id="inputGroup-sizing-default" style={{ width: "100%" }}>Students Father's Name</span>
							  </div>
							  <input onChange={(e) => {
							  	this.setState({
									fathersName: e.target.value
							  	})
							  }} type="text" class="form-control" name="fathersName" placeholder="Enter Students Father's Name" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4">
							<div class="input-group mb-3">
							  <div class="input-group-prepend">
							    <span class="input-group-text" id="inputGroup-sizing-default" style={{ width: "100%" }}>Father's Phone #</span>
							  </div>
							  <input onChange={(e) => {
							  	this.setState({
									fathersPhoneNumber: e.target.value
							  	})
							  }} type="text" class="form-control" name="fathersPhoneNumber" name="schoolID" aria-label="Default" placeholder="Father's Phone #" aria-describedby="inputGroup-sizing-default" />
							</div>
						</div>
						<div className="col-md-4">
							<div class="input-group mb-3">
							  <div class="input-group-prepend">
							    <span class="input-group-text" id="inputGroup-sizing-default" style={{ width: "100%" }}>Mother's Phone #</span>
							  </div>
							  <input onChange={(e) => {
							  	this.setState({
									mothersPhoneNumber: e.target.value
							  	})
							  }} type="text" class="form-control" name="mothersPhoneNumber" aria-label="Default" placeholder="Mother's Phone #" aria-describedby="inputGroup-sizing-default" />
							</div>
					</div>
					<div className="col-md-4">
						<div class="input-group mb-3">
						  <div class="input-group-prepend">
						   <span class="input-group-text" id="inputGroup-sizing-default" style={{ width: "100%" }}>Primary Contact</span>
						  </div>
						  <select onChange={(e) => {
							  	this.setState({
									primaryContact: e.target.value
							  	})
							  }} name="primaryContact" class="custom-select" id="inputGroupSelect01">
						    <option selected>Choose...</option>
						    <option value="Mother">Mother</option>
						    <option value="Father">Father</option>
						  </select>
						</div>
					</div>

				</div>
				{/*<div className="row">
					<div className="col-md-6">
						<div class="input-group mb-3">
						  <div class="input-group-prepend">
						    <span class="input-group-text" id="inputGroup-sizing-default" style={{ width: "100%" }}>Students Mothers Name</span>
						  </div>
						  <input type="text" class="form-control" name="mothersName" placeholder="Enter Students Mother's Name" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
						</div>
					</div>
					<div className="col-md-6">
						<div class="input-group mb-3">
						  <div class="input-group-prepend">
						    <span class="input-group-text" id="inputGroup-sizing-default" style={{ width: "100%" }}>Students Mothers Name</span>
						  </div>
						  <input type="text" class="form-control" name="mothersName" placeholder="Enter Students Mother's Name" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
						</div>
					</div>
				</div>*/}
				<div className="row">
					<div className="col-md-6">
						<div class="input-group mb-3">
						  <div class="input-group-prepend">
						   <span class="input-group-text" id="inputGroup-sizing-default" style={{ width: "100%" }}>Student's Gender</span>
						  </div>
						  <select onChange={(e) => {
							  	this.setState({
									gender: e.target.value
							  	})
							  }} name="gender" class="custom-select" id="inputGroupSelect01">
						    <option selected>Choose...</option>
						    <option value="Male">Male</option>
						    <option value="Female">Female</option>
						  </select>
						</div>
					</div>
					<div className="col-md-6">
						<div class="input-group mb-3">
						  <div class="input-group-prepend">
						   <span class="input-group-text" id="inputGroup-sizing-default" style={{ width: "100%" }}>Student's Ethnicity</span>
						  </div>
						  <select onChange={(e) => {
							  	this.setState({
									race: e.target.value
							  	})
							  }} name="race" class="custom-select" id="inputGroupSelect01">
						    <option value="mixed-race">Mixed Race</option>
						    <option value="arctic">Arctic (Siberian, Eskimo)</option>
						    <option value="caucasian-eurpoean">Caucasian (European)</option>
						    <option value="caucasian-indian">Caucasian (Indian)</option>
						    <option value="caucasian-middle-east">Caucasian (Middle East)</option>
						    <option value="caucasian-north-african">Caucasian (North African, Other)</option>
						    <option value="indigenous-australian">Indigenous Australian</option>
						    <option value="native-american">Native American</option>
						    <option value="north-east-asian">North East Asian (Mongol, Tibetan, Korean Japanese, etc)</option>
						    <option value="pacific">Pacific (Polynesian, Micronesian, etc)</option>
						    <option value="south-east-asian">South East Asian (Chinese, Thai, Malay, Filipino, etc)</option>
						    <option value="west-african">West African, Bushmen, Ethiopian</option>
						    <option value="other-race">Other Race</option>
						</select>
						</div>
					</div>
				</div>
{/*				<div className="row">
					<div className="col-md-12">
						<div class="input-group mb-3">
						  <div class="input-group-prepend">
						    <span class="input-group-text" id="inputGroup-sizing-default" style={{ width: "100%" }}>Students Mothers Name</span>
						  </div>
						  <input type="text" class="form-control" name="mothersName" placeholder="Enter Students Mother's Name" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
						</div>
					</div>
				</div>*/}
					<div className="row">
						<div className="col-md-12">
						<h4 className="text-center">Students Profile Image</h4>
							{/*<ImageUploader
				                withIcon={true} 
				                withPreview={true} 
				                singleImage={true}
				                buttonText='Choose images'
				                onChange={this.onDrop}
				                imgExtension={['.jpg', '.gif', '.png', '.gif']}
				                maxFileSize={5242880} 
				                name="image"
				            />*/}
				            <div class="input-group">
							  <div class="input-group-prepend">
							    <span style={{ width: "100%" }} class="input-group-text" id="inputGroupFileAddon01">Upload</span>
							  </div>
							  <div class="custom-file">
							    <input onChange={this.onDrop} name="image" type="file" class="custom-file-input" id="inputGroupFile01"
							      aria-describedby="inputGroupFileAddon01" />
							    <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
							  </div>
							</div>
						</div>
					</div>
					<div style={{ marginTop: "15px" }} className="row">
						<div className="col-md-12">
							<button className="btn btn-outline-info" value="submit" style={{ width: "100%", marginBottom: "50px" }}>Submit And Create Student File</button>
						</div>
					</div>
					</form>
				</div>
			</div>
		);
	}
}
export default RegisterHelper;