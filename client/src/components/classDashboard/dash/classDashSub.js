import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import Timeline from 'react-calendar-timeline';
import { uuid } from 'uuidv4';
import 'react-calendar-timeline/lib/Timeline.css';
import moment from 'moment';


const groups = [{ id: 1, title: "Adam Smith" }, { id: 2, title: 'Johnny Appleseed' }, { id: 3, title: 'Kidino Rogers' }, { id: 4, title: 'Sarah Nicce' }, { id: 5, title: "Tommy Hilfiger" }, { id: 6, title: 'Mike Secre' }]
 
const items = [
  {
    id: 1,
    group: 1,
    title: 'item 1',
    start_time: moment(),
    end_time: moment().add(1, 'hour')
  },
  {
    id: 2,
    group: 2,
    title: 'item 2',
    start_time: moment().add(-0.5, 'hour'),
    end_time: moment().add(0.5, 'hour')
  },
  {
    id: 3,
    group: 1,
    title: 'item 3',
    start_time: moment().add(2, 'hour'),
    end_time: moment().add(3, 'hour')
  }
]

class ClassDashSub extends Component {
constructor(props) {
	super(props);

	this.state = {
		gatherData: [{ id: 1, title: "" }],
		finalArr: [],
		title: ""
	}

	
}
	componentDidMount () {
		axios.post("/gather/agenda/home", {
			email: this.props.email
		}).then((res) => {
    		if (this.state.gatherData.length === 0) {
    			this.setState({
	    			gatherData: [{ id: 1, title: "" }]
	    		})
    		} else {
    			this.setState({
	    			gatherData: res.data
	    		})
    		}
    	}).catch((err) => {
    		console.log(err);
    	})
		console.log("this.state.data ClassDashSub :",  this.state.data);
		console.log("DATE :", this.state.date);
	}		
	submitStudentName = () => {
		axios.post("/post/student", {
			email: this.props.email,
			title: this.state.title,
			id: uuid()
		}).then((res) => {
    		console.log("MAGICCCCC :", res.data);
    	}).catch((err) => {
    		console.log(err);
    	})

		setTimeout(() => {
			alert("Successfully Added Student!")
		}, 2500);
		this.setState({
			title: ""
		})
		axios.post("/gather/agenda/home", {
			email: this.props.email
		}).then((res) => {
    		this.setState({
    			gatherData: res.data
    		});
    		const gather = res.data;
    	}).catch((err) => {
    		console.log(err);
    	})
	}
	render () {
		console.log("this.state :", this.state);
	    return (
			<div>
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-12">
					<h6 className="text-center">Add A Student</h6>
					<div class="input-group mb-3">
					  <div class="input-group-prepend">
					    <span style={{ width: "100%" }} class="input-group-text" id="inputGroup-sizing-default">Student Name</span>
					  </div>
					  <input onChange={(e) => {
					  	this.setState({
					  		title: e.target.value
					  	})
					  }} value={this.state.title} type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" /> 
					</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 col-xs-12">
						<button onClick={this.submitStudentName} className="btn btn-danger" style={{ width: "100%", marginBottom: "10px" }}>Submit Student Information</button>
					</div>
				</div>
			</div>
			{this.state.gatherData.reverse().map((item, index) => {
				console.log(item.studentList)
				return ( 
				<Timeline 
        		  key={index}
			      groups={item.studentList ===  undefined ? [{ id: 1, title: "" }] : item.studentList}
			      items={items}
			      defaultTimeStart={moment().add(-12, 'hour')}
			      defaultTimeEnd={moment().add(12, 'hour')}
			    />
			   	);
			})}
			</div>
	    );
	}
}

const mapStateToProps = (state) => {
	return {
		fullName: state.bio.data.fullName,
		email: state.bio.data.email
	}
}
export default connect(mapStateToProps, {  })(withRouter(ClassDashSub));