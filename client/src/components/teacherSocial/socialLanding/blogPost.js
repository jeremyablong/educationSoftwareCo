import React, { Component } from 'react';
import axios from "axios";
import { connect } from "react-redux";
import ShowMore from 'react-show-more';

class BlogPost extends Component {
constructor () {
	super();

	this.state = {
		showComment: false,
		uuid: "",
		commentResponse: "",
		showMore: false
	}
}
	componentDidMount () {
		axios.post("/get/blog/subcomments", {
			uuid: this.state.uuid
		}).then((res) => {
    		console.log("/get/blog/subcomments POST request:", res.data);
    	}).catch((err) => {
    		console.log(err);
    	})
	}
	renderCommentSubmission = () => {
		axios.post("/blog/post/comment", {
    		uuid: this.state.uuid,
    		fullName: this.props.fullName,
    		comment: this.state.commentResponse,
    		location: this.props.location
    	}).then((res) => {
    		console.log("The Magic :", res.data);
    		this.setState({
				gatherTimelinePosts: res.data,
				commentResponse: ""
    		})
    	}).catch((err) => {
    		console.log(err);
    	})

    	this.setState({
			commentResponse: ""
		})

		alert("You posted a comment reply!")
	}
	renderContent = () => {
		if (this.props.timeline) {
			return this.props.timeline.map((itemmm, indexxx) => {
				if (itemmm.newsfeed) {
					return itemmm.newsfeed.map((item, index) => {
						console.log("itemmm.newsfeed.map :", item);
						return (
						<div key={index} className="row">
						  <div className="col-md-12">
						    <div className="row">
						      <div className="span8">
						        <h5><strong><a style={{ color: "black" }}>Title: {item.title}</a></strong></h5>
						        <h6><strong><a style={{ color: "black" }}>Sub-Title: {item.subTitle}</a></strong></h6>
						      </div>
						    </div>
						    <div className="row">
						      <div className="span2">
						        <a href="#" className="thumbnail">
						            <img style={{ maxWidth: "400px", maxHeight: "350px" }} src={item.location} alt="" />
						        </a>
						      </div>
						      <div className="span6">      
						        <p>
						          {item.content}
						        </p>
						       {/* <p><a className="btn btn-danger" style={{ color: "white" }} onClick={() =>{
						        	this.setState({
						        		showComment: !this.state.showComment,
						        		uuid: item.uuid
						        	})
						        }}>Drop A Comment!</a></p>*/}
						      </div>
						    </div>
						    <div className="row">
						      <div className="span8">
						        <p></p>
						        <p>
						          <i className="icon-user"></i> by <a style={{ color: "darkblue" }}>{item.fullName}</a> 
						          | <i className="icon-calendar"></i> {item.date}
						          {/*| <i className="icon-comment"></i> <a href="#">3 Comments</a>*/}
						          {/*| <i className="icon-share"></i> <a href="#">39 Shares</a>*/}
						          {/*| <i className="icon-tags"></i> Tags : <a href="#"><span className="label label-info">Snipp</span></a> */}
						   {/*       <a href="#"><span className="label label-info">Bootstrap</span></a> 
						          <a href="#"><span className="label label-info">UI</span></a> 
						          <a href="#"><span className="label label-info">growth</span></a>*/}
						        </p>
						      </div>
						    </div>
						    <div class="row bootstrap snippets">
							    <div class="col-md-12 col-md-offset-2 col-sm-12">
							        <div class="comment-wrapper">
							            <div class="panel panel-info">
							                <div class="panel-heading">
							                    Comment on this blog post
							                </div>
							                <div class="panel-body">
							                    <textarea onChange={(e) => {
							                    	this.setState({
							                    		uuid: item.uuid,
							                    		commentResponse: e.target.value,
							                    		location: item.location
							                    	})
							                    }} value={this.state.commentResponse} class="form-control" placeholder="write a comment..." rows="3"></textarea>
							                    <br />
							                    <button onClick={this.renderCommentSubmission} type="button" class="btn btn-info pull-right">Drop A Comment</button>
							                    <div class="clearfix"></div>
							                    <hr />
							                    
							                </div>
							            </div>
							        </div>

							    </div>
							</div>
							<ul class="media-list">
							{item.comments.slice(0, 2).map((i, idx) => {
								console.log("finale :", i);
								return (
								 	<li style={{ margin: "20px 0px" }} class="media">
								 	<div className="row">
										<div className="col-md-2">
											<a href="#" class="pull-left">
									 	        <img style={{ maxWidth: "100%", maxHeight: "100%" }} src={i.location} alt="" class="img-circle" />
									 	    </a>
										</div>
										<div className="col-md-10">
											<div class="media-body">
										        <span class="text-muted pull-right">
										            <small class="text-muted">{i.date}</small>
										        </span>
										        <strong class="text-success" style={{ paddingLeft: "20px" }}>{i.fullName}</strong>
										        <p>
										            {i.comment}
										        </p>
										    </div>
										</div>
								 	</div>
									</li>
								);
							})}
							{this.state.showMore === true ? item.comments.slice(2, item.comments.length).map((i, idx) => {
								console.log("finale :", i);
								return (
								 	<li style={{ margin: "20px 0px" }} class="media">
								 	<div className="row">
										<div className="col-md-2">
											<a href="#" class="pull-left">
									 	        <img style={{ maxWidth: "100%", maxHeight: "100%" }} src={i.location} alt="" class="img-circle" />
									 	    </a>
										</div>
										<div className="col-md-10">
											<div class="media-body">
										        <span class="text-muted pull-right">
										            <small class="text-muted">{i.date}</small>
										        </span>
										        <strong class="text-success" style={{ paddingLeft: "20px" }}>{i.fullName}</strong>
										        <p>
										            {i.comment}
										        </p>
										    </div>
										</div>
								 	</div>
									</li>
								);
							}) : null}
							<button onClick={() => {
								this.setState({
									showMore: !this.state.showMore
								})
							}} className="btn btn-danger" style={{ width: "100%" }}>Show More Comments</button>
							</ul>
						  </div>
						  <hr style={{ border: "2px solid black", width: "100%" }} />
						</div>
						);
					})
				}
			})
		}
	}
	render() {
		console.log("this.props.pass :", this.props)
		return (
			<div style={{ marginLeft: "45px" }}>
				{this.renderContent()}
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	console.log(state);
	return {
		fullName: state.bio.data.fullName,
		location: state.bio.data.location
	}
}


export default connect(mapStateToProps, { })(BlogPost);

