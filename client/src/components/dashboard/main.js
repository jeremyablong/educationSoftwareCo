import React, { Component } from 'react';
import "./style.css";

class MainDashboard extends Component {
constructor () {
	super();


}
	render() {
		return (
			<div>
				<div className="container-fluid">
					<div className="row" style={{ marginTop: "20px" }}>
						<div className="col-md-3 col-xs-6  col-sm-6 cardie">
							<div className="card" style={{ width: "100%" }}>
							  <div className="card-body card-bod">
							    <h5 className="card-title title">Registered Students</h5>
							    <h3 className="card-text"><b>1,423</b></h3>
							    {/*<a href="#" className="btn btn-primary">Go somewhere</a>*/}
							  </div>
							</div>
						</div>
						<div className="col-md-3 col-xs-6 col-sm-6 cardie">
							<div className="card"  style={{ width: "100%" }}>
							  <div className="card-body card-bod">
							    <h5 className="card-title title">Teachers Registered</h5>
							   <h3 className="card-text"><b>23</b></h3>
							    {/*<a href="#" className="btn btn-primary">Go somewhere</a>*/}
							  </div>
							</div>
						</div>
						<div className="col-md-3 col-xs-6 col-sm-6 cardie">
							<div className="card" style={{ width: "100%" }}>
							  <div className="card-body card-bod">
							    <h5 className="card-title title">Insert Data Here</h5>
							    <h3 className="card-text"><b>1,423</b></h3>
							    {/*<a href="#" className="btn btn-primary">Go somewhere</a>*/}
							  </div>
							</div>
						</div>
						<div className="col-md-3 col-xs-6 col-sm-6 cardie">
							<div className="card" style={{ width: "100%" }}>
							  <div className="card-body card-bod">
							   <h5 className="card-title title">Insert Data Here</h5>
							    <h3 className="card-text"><b>1,423</b></h3>
							    {/*<a href="#" className="btn btn-primary">Go somewhere</a>*/}
							  </div>
							</div>
						</div>
						<div style={{ marginTop: "30px" }} className="col-md-3 col-xs-6 col-sm-6 cardie">
							<div className="card" style={{ width: "100%" }}>
							  <div className="card-body card-bod">
							    <h5 className="card-title title">Insert Data Here</h5>
							    <h3 className="card-text"><b>1,423</b></h3>
							    {/*<a href="#" className="btn btn-primary">Go somewhere</a>*/}
							  </div>
							</div>
						</div>
						<div style={{ marginTop: "30px" }} className="col-md-3 col-xs-6 col-sm-6 cardie">
							<div className="card" style={{ width: "100%" }}>
							  <div className="card-body card-bod">
							   <h5 className="card-title title">Insert Data Here</h5>
							    <h3 className="card-text"><b>1,423</b></h3>
							    {/*<a href="#" className="btn btn-primary">Go somewhere</a>*/}
							  </div>
							</div>
						</div>
						<div style={{ marginTop: "30px" }} className="col-md-3 col-xs-6 col-sm-6 cardie">
							<div className="card" style={{ width: "100%" }}>
							  <div className="card-body card-bod">
							    <h5 className="card-title title">Insert Data Here</h5>
							    <h3 className="card-text"><b>1,423</b></h3>
							    {/*<a href="#" className="btn btn-primary">Go somewhere</a>*/}
							  </div>
							</div>
						</div>
						<div style={{ marginTop: "30px" }} className="col-md-3 col-xs-6 col-sm-6 cardie">
							<div className="card" style={{ width: "100%" }}>
							  <div className="card-body card-bod">
							   <h5 className="card-title title">Insert Data Here</h5>
							    <h3 className="card-text"><b>1,423</b></h3>
							    {/*<a href="#" className="btn btn-primary">Go somewhere</a>*/}
							  </div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default MainDashboard;