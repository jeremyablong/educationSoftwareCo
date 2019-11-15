import React, { Component } from 'react';
import ImageUploader from 'react-images-upload';

class RegisterHelper extends Component {
constructor () {
	super();

	this.state = {
		pictures: []
	}
}
    onDrop = (picture) => {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }
	render() {
		return (
			<div>
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-6">
							<div class="input-group mb-3">
							  <div class="input-group-prepend">
							    <span class="input-group-text" id="inputGroup-sizing-default" style={{ width: "100%" }}>Full Name</span>
							  </div>
							  <input type="text" class="form-control" name="fullName" aria-label="Default" placeholder="Enter Students Full Name" aria-describedby="inputGroup-sizing-default" />
							</div>
						</div>
						<div className="col-md-6">
							<div class="input-group mb-3">
							  <div class="input-group-prepend">
							    <span class="input-group-text" id="inputGroup-sizing-default" style={{ width: "100%" }}>Student Email</span>
							  </div>
							  <input type="text" class="form-control" name="email" aria-label="Default" placeholder="Enter Students Email" aria-describedby="inputGroup-sizing-default" />
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12">
							<div class="input-group mb-3">
							  <div class="input-group-prepend">
							    <span class="input-group-text" id="inputGroup-sizing-default" style={{ width: "100%" }}>Student Address</span>
							  </div>
							  <input type="text" class="form-control" name="address" aria-label="Default" placeholder="Enter Students Address" aria-describedby="inputGroup-sizing-default" />
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6">
							<div class="input-group mb-3">
							  <div class="input-group-prepend">
							    <span class="input-group-text" id="inputGroup-sizing-default" style={{ width: "100%" }}>City</span>
							  </div>
							  <input type="text" class="form-control" name="city" name="city" placeholder="Enter Students City" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
							</div>
						</div>
						<div className="col-md-6">
							<div class="input-group mb-3">
							  <div class="input-group-prepend">
							    <span class="input-group-text" id="inputGroup-sizing-default" style={{ width: "100%" }}>State</span>
							  </div>
							  <input type="text" class="form-control" name="state" aria-label="Default" placeholder="Enter Students State" aria-describedby="inputGroup-sizing-default" />
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6">
							<div class="input-group mb-3">
							  <div class="input-group-prepend">
							    <span class="input-group-text" id="inputGroup-sizing-default" style={{ width: "100%" }}>Student School ID</span>
							  </div>
							  <input type="text" class="form-control" name="city" name="schoolID" aria-label="Default" placeholder="*IMPORTANT* - Enter Students Correct ID" aria-describedby="inputGroup-sizing-default" />
							</div>
						</div>
						<div className="col-md-6">
							<div class="input-group mb-3">
							  <div class="input-group-prepend">
							    <span class="input-group-text" id="inputGroup-sizing-default" style={{ width: "100%" }}>Student Phone Number</span>
							  </div>
							  <input type="text" class="form-control" name="state" aria-label="Default" placeholder="Enter Students Phone Number" aria-describedby="inputGroup-sizing-default" />
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12">
							<div class="input-group mb-3">
							  <div class="input-group-prepend">
							    <span class="input-group-text" id="inputGroup-sizing-default" style={{ width: "100%" }}>Students Mothers Name</span>
							  </div>
							  <input type="text" class="form-control" name="mothersName" placeholder="Enter Students Mother's Name" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12">
							<div class="input-group mb-3">
							  <div class="input-group-prepend">
							    <span class="input-group-text" id="inputGroup-sizing-default" style={{ width: "100%" }}>Students Father's Name</span>
							  </div>
							  <input type="text" class="form-control" name="fathersName" placeholder="Enter Students Father's Name" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4">
							<div class="input-group mb-3">
							  <div class="input-group-prepend">
							    <span class="input-group-text" id="inputGroup-sizing-default" style={{ width: "100%" }}>Father's Phone #</span>
							  </div>
							  <input type="text" class="form-control" name="city" name="schoolID" aria-label="Default" placeholder="Father's Phone #" aria-describedby="inputGroup-sizing-default" />
							</div>
						</div>
						<div className="col-md-4">
							<div class="input-group mb-3">
							  <div class="input-group-prepend">
							    <span class="input-group-text" id="inputGroup-sizing-default" style={{ width: "100%" }}>Mother's Phone #</span>
							  </div>
							  <input type="text" class="form-control" name="mothersPhoneNumber" aria-label="Default" placeholder="Mother's Phone #" aria-describedby="inputGroup-sizing-default" />
							</div>
						</div>
					<div className="col-md-4">
						<div class="input-group mb-3">
						  <div class="input-group-prepend">
						   <span class="input-group-text" id="inputGroup-sizing-default" style={{ width: "100%" }}>Primary Contact</span>
						  </div>
						  <select class="custom-select" id="inputGroupSelect01">
						    <option selected>Choose...</option>
						    <option value="Mother">Mother</option>
						    <option value="Father">Father</option>
						  </select>
						</div>
					</div>
				</div>
					<div className="row">
						<div className="col-md-12">
						<h4 className="text-center">Students Profile Image</h4>
							<ImageUploader
				                withIcon={true} 
				                withPreview={true} 
				                singleImage={true}
				                buttonText='Choose images'
				                onChange={this.onDrop}
				                imgExtension={['.jpg', '.gif', '.png', '.gif']}
				                maxFileSize={5242880}
				            />
						</div>
					</div>
					<div className="row">
						<div className="col-md-12">
							<button className="btn btn-outline-info" style={{ width: "100%", marginBottom: "50px" }}>Submit And Create Student File</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default RegisterHelper;