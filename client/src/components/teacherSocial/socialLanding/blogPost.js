import React, { Component } from 'react';
import axios from "axios";


class BlogPost extends Component {
constructor () {
	super();

	this.state = {

	}
}
	componentDidMount () {
		// setTimeout(() => {
		// 	axios.post("/gather/newsfeed/individual", {
	 //    		email: this.props.location.state.data.email
	 //    	}).then((res) => {
	 //    		console.log("The Magic :", res.data);
	 //    		this.setState({
		// 			gatherTimelinePosts: res.data
	 //    		})
	 //    	}).catch((err) => {
	 //    		console.log(err);
	 //    	})
  //   	}, 500)
	}
	renderContent = () => {
		if (this.props.timeline) {
			return this.props.timeline.map((itemmm, indexxx) => {
				if (itemmm.newsfeed) {
					return itemmm.newsfeed.map((item, index) => {
						console.log("itemmm.newsfeed.map :", item);
						return (
						<div className="row">
						  <div className="col-md-12">
						    <div className="row">
						      <div className="span8">
						        <h5><strong><a style={{ color: "darkblue" }}>Title: {item.title}</a></strong></h5>
						        <h6><strong><a style={{ color: "darkblue" }}>Sub-Title: {item.subTitle}</a></strong></h6>
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
						          Lorem ipsum dolor sit amet, id nec conceptam conclusionemque. Et eam tation option. Utinam salutatus ex eum. Ne mea dicit tibique facilisi, ea mei omittam explicari conclusionemque, ad nobis propriae quaerendum sea.
						        </p>
						        <p><a className="btn btn-danger" href="#">Drop A Comment!</a></p>
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
		console.log("this.props.pass :", this.props.timeline)
		return (
			<div style={{ marginLeft: "45px" }}>
				{this.renderContent()}
			</div>
		);
	}
}
export default BlogPost;