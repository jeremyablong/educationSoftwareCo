import React, { Component } from 'react';
import Sidebar from "react-sidebar";
import { withRouter } from "react-router";
import "./style.css";
import axios from "axios";
import { connect } from "react-redux";
import { uuid } from "uuidv4";

class SubComponent extends Component {
constructor (props) {
	super(props);

	this.state = {
    	sidebarOpen: true,
    	title: "",
    	subTitle: "",
    	content: "",
    	gatherTimelinePosts: []
    };
}
    onSetSidebarOpen = (open) => {
    	this.setState({ 
    		sidebarOpen: open 
    	});
    }
    componentDidMount () {
    	window.scrollTo(0, 0);
    	setTimeout(() => {
			axios.post("/gather/newsfeed/individual", {
	    		email: this.props.location.state.data.email
	    	}).then((res) => {
	    		console.log("The Magic :", res.data);
	    		this.setState({
					gatherTimelinePosts: res.data
	    		})
	    	}).catch((err) => {
	    		console.log(err);
	    	})
    	}, 500)
    }
    onSubmit = (e) => {
    	e.preventDefault();
		console.log("Clicked.");
		axios.post("/post/newsfeed", {
	      email: this.props.email,
	      uuid: uuid(),
	      title: this.state.title,
	      subTitle: this.state.subTitle,
	      content: this.state.content
	    }).then((res) => {
	      console.log(res.data);
	    }).catch((err) => {
	      console.log(err);
	    })
	    this.setState({
	    	title: "",
	    	subTitle: "",
	    	content: ""
	    })
    }
    renderConditional = () => {
    	for (let i in this.state.gatherTimelinePosts) {
			if (this.state.gatherTimelinePosts[i].newsfeed) {
				return <h4 className="text-center" style={{ marginTop: "10px" }}>Welcome to {this.props.fullName}'s timeline</h4>
			} else {
				return <h4 className="text-center" style={{ marginTop: "10px" }}>No Posts Avaliable For Timeline.</h4>
			}
    	}
    }
	render() {
		console.log("this.props :", this.props.location.state);
		// const { data } = this.props.location.state;
		console.log("SubComponent.js file state :", this.state);
		return (
			<div class="container-fluid">
			{this.props.email === this.props.location.state.data.email ? <div class="row">
				<div class="col-md-12">
				<div style={{ width: "100%" }} class="card gedf-card">
				<form onSubmit={this.onSubmit}>
                    <div class="card-header">
                    <h4 className="text-left text-white">Welcome to your timeline {this.props.fullName}</h4>
                        <ul class="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
                            <li class="nav-item">
                                <a  class="nav-link active" id="posts-tab" data-toggle="tab" href="#posts" role="tab" aria-controls="posts" aria-selected="true">Make
                                    a publication</a>
                            </li>
                            {/*<li class="nav-item">
                                <a class="nav-link" id="images-tab" data-toggle="tab" role="tab" aria-controls="images" aria-selected="false" href="#images">Images</a>
                            </li>*/}
                        </ul>
                    </div>
                    <div class="card-body">
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="posts" role="tabpanel" aria-labelledby="posts-tab">
                            <div class="input-group input-group-sm mb-3">
							  <div class="input-group-prepend">
							    <span style={{ width: "100%" }} class="input-group-text" id="inputGroup-sizing-sm">Title</span>
							  </div>
							  <input placeholder="Enter your title here..." onChange={(e) => {
							  	this.setState({
									title: e.target.value
							  	})
							  }} type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
							</div>
							<div class="input-group input-group-sm mb-3">
							  <div class="input-group-prepend">
							    <span style={{ width: "100%" }} class="input-group-text" id="inputGroup-sizing-sm">Sub-Title</span>
							  </div>
							  <input placeholder="Enter your sub-title here..." onChange={(e) => {
							  	this.setState({
									subTitle: e.target.value
							  	})
							  }} type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
							</div>
						
                                <div class="form-group">
                                    <label class="sr-only" for="message">post</label>
                                    <textarea  onChange={(e) => {
									  	this.setState({
											content: e.target.value
									  	})
									  }} class="form-control" id="message" rows="3" placeholder="What are you thinking?"></textarea>
                                </div>

                            </div>
                           {/* <div class="tab-pane fade" id="images" role="tabpanel" aria-labelledby="images-tab">
                                <div class="form-group">
                                    <div class="custom-file">
                                        <input type="file" class="custom-file-input" id="customFile" />
                                        <label class="custom-file-label" for="customFile">Upload image</label>
                                    </div>
                                </div>
                                <div class="py-4"></div>
                            </div>*/}
                        </div>
                        <div class="btn-toolbar justify-content-between">
                            <div class="btn-group">
                                <button type="submit" class="btn btn-primary">share</button>
                            </div>
                            <div class="btn-group">
                                <button id="btnGroupDrop1" type="button" class="btn btn-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                    <i class="fa fa-globe"></i>
                                </button>
                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="btnGroupDrop1">
                                    <a class="dropdown-item" href="#"><i class="fa fa-globe"></i> Public</a>
                                    <a class="dropdown-item" href="#"><i class="fa fa-users"></i> Friends</a>
                                    <a class="dropdown-item" href="#"><i class="fa fa-user"></i> Just me</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    </form>
                </div>
			</div>
		</div> : null}
		{this.state.gatherTimelinePosts.map((item, index) => {
			if (item.newsfeed) {
				return item.newsfeed.map((i, idx) => {
					console.log("newsfeed i :", i)
					return ( 
						<div>
						
						</div>
					);
				})	
			}
		})}
		{this.renderConditional()}
		</div>
		);
	}
}
const mapStateToProps = (state) => {
	console.log(state);
	return {
		email: state.bio.data.email,
		fullName: state.bio.data.fullName
	}
}
export default withRouter(connect(mapStateToProps, {  })(SubComponent));