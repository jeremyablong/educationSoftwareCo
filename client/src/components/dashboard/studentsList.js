import React, { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import axios from "axios";
import _ from "lodash";
import matchSorter from 'match-sorter';
import Modal from 'react-modal';
import { withRouter } from "react-router";

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class StudentListDash extends Component {
constructor ()  {
	super();

	this.state = {
		data: [],
		modalIsOpen: false,
		imagePath: "",
		passDownData: null
	}
}
	componentDidMount () {
		axios.get("/find/all/students").then((res) => {
			console.log("/find/all/students:", res.data);
			this.setState({
				data: res.data
			})
		}).catch((err) => {
			console.log(err);
		})
	}
	renderReRender = () => {
		axios.get("/find/all/students").then((res) => {
			console.log("/find/all/students:", res.data);
			this.setState({
				data: res.data
			})
		}).catch((err) => {
			console.log(err);
		})
	}
	renderModal = () => {
		return (
			<div>
		       
		        <Modal
		          isOpen={this.state.modalIsOpen}
		          onAfterOpen={this.afterOpenModal}
		          onRequestClose={this.closeModal}
		          style={customStyles}
		          contentLabel="Example Modal"
		        >
		        <div className="container">
					<div className="row">
						<div className="col-md-12 mx-auto">
							{this.state.imagePath.length > 0 ? <img style={{ width: "100%", height: "100%", maxHeight: "350px", maxWidth: "350px" }} src={require(`../../public/uploads/${this.state.imagePath}`)} alt="big profile image"/> : null}
						</div>
					</div>
		        </div>
		        
		          <div className="container">
					<div className="row">
						<div className="col-md-12 col-sm-12">
							<button style={{ width: "100%" }} className="btn btn-danger" onClick={() => {
					          	this.setState({
					          		modalIsOpen: false
					          	})
					          }}>Close Modal</button>
						</div>
					</div>
		          </div>
		         
		        </Modal>
		    </div>
		);
	}
	renderClick = () => {
		console.log("renderClick", this.state);
		// this.props.history.push("/view/student/profile", { data: this.state.passDownData });
		this.props.history.push({
          pathname: '/view/student/profile',
          appState: {
            data: this.state.passDownData
          }
        });
	}
	render() {
		const { data } = this.state;
		return (
		<div>
			<div style={{ paddingTop: "30px" }}>
			<button style={{ width: "100%", marginBottom: "10px" }} onClick={this.renderReRender} className="btn btn-outline-danger">Gather Students - Table</button>
			    <ReactTable
			          data={data}
			          filterable
			          sortable={false}
			          defaultFilterMethod={(filter, row) =>
			            String(row[filter.id]) === filter.value}
			          columns={[
			          	{
		                  Header: "Picture",
		                  accessor: "studentImage",
		                  id: "studentImage",
		                  filterable: false,
		                  accessor: d => {
		                  	return <img onClick={() => {
		                  		this.setState({
		                  			modalIsOpen: true,
		                  			imagePath: d.originalname
		                  		}, () => {
		                  			console.log("clicked", this.state.imagePath)
		                  		})
		                  	}} style={{ width: "30px", height: "30px" }} src={require(`../../public/uploads/${d.originalname}`)} alt="profile pic"/>
		                  }
		                },
			          	 {
		                  Header: "Student Name",
		                  accessor: "studentName",
		                  id: "studentName",
		                  filterable: true,
		                  accessor: d => !d.fullName ? null : <p onClick={() => {
		                  	this.setState({
		                  		passDownData: d
		                  	}, () => {
		                  		this.renderClick()
		                  	})
		                  }}>{d.fullName}</p>
		                },
			          	{
		                  Header: "Email",
		           		  accessor: "email",
		                  id: "email",
		                  accessor: d => <p onClick={() => {
		                  	this.setState({
		                  		passDownData: d
		                  	}, () => {
		                  		this.renderClick()
		                  	})
		                  }}>{d.email}</p>,
		                  filterMethod: (filter, rows) =>
		                  filter.value === rows.Ranking ? filter.value : null
		                  // console.log(filter.value),
		                  // console.log(rows.Ranking)
		                  // matchSorter(rows, filter.value, {
		                  // 	keys: "Ranking"
		                  // }),
		                  // filterAll: true
		                   
		                },
		                {
		                  Header: "School ID",
		                  id: "schoolID",
		                  accessor: d => <p onClick={() => {
		                  	this.setState({
		                  		passDownData: d
		                  	}, () => {
		                  		this.renderClick()
		                  	})
		                  }}>{d.schoolID}</p>,
		                  filterMethod: (filter, rows) =>
		                    matchSorter(rows, filter.value, { keys: ["CurrencyAndName"] }),
		                  filterAll: true
		                }, 
		                {
		                  Header: "Gender",
		                  accessor: "gender",
		                  id: "gender",
		                  filterable: true,
		                  accessor: d => {
		                  	return <p onClick={() => {
		                  	this.setState({
		                  		passDownData: d
		                  	}, () => {
		                  		this.renderClick()
		                  	})
		                  }}>{d.gender}</p>
		                  },
		                  filterMethod: (filter, rows) =>
		                  filter.value === rows.CurrentPrice ? rows.CurrentPrice : null
		                }, 
		                {
		                  Header: "Ethnicity",
		                  accessor: "ethnicity",
		                  id: "ethnicity",
		                  filterable: true,
		                  accessor: d => <p onClick={() => {
		                  	this.setState({
		                  		passDownData: d
		                  	}, () => {
		                  		this.renderClick()
		                  	})
		                  }}>{d.race}</p>,
		                  filterMethod: (filter, row) =>
		                    row[filter.id].startsWith(filter.value) &&
		                    row[filter.id].endsWith(filter.value)
		                },
		                {
		                  Header: "Phone Number",
		                  accessor: "phoneNumber",
		                  id: "phoneNumber",
		                  filterable: true,
		                  accessor: d => <p onClick={() => {
			                  	this.setState({
			                  		passDownData: d
			                  	}, () => {
			                  		this.renderClick()
			                  	})
			                  }}>{d.studentPhoneNumber}</p>,
		                  filterMethod: (filter, row) =>
		                    row[filter.id].startsWith(filter.value) &&
		                    row[filter.id].endsWith(filter.value)
		                },
		                
			            {
			              
			              columns: [
			                {
			                  Header: "Primary Contact",
			                  accessor: "primaryContact",
			                  id: "primaryContact",
		                  	  filterable: false,
			                  accessor: d => !d.primaryContact ? "No Data Provided" : <p onClick={() => {
			                  	this.setState({
			                  		passDownData: d
			                  	}, () => {
			                  		this.renderClick()
			                  	})
			                  }}>{d.primaryContact}</p>,
			                  filterMethod: (filter, row) =>
			                    row[filter.id].startsWith(filter.value) &&
			                    row[filter.id].endsWith(filter.value)
			                }
			              ]
			            },
			            {
			             
			              columns: [
			                {
			                  Header: "Address",
			                  accessor: "address",
			                  id: "address",
		                      filterable: false,
			                  accessor: d => <p onClick={() => {
			                  	this.setState({
			                  		passDownData: d
			                  	}, () => {
			                  		this.renderClick()
			                  	})
			                  }}>{d.address}</p>,
			                  filterMethod: (filter, row) =>
			                    row[filter.id].startsWith(filter.value) &&
			                    row[filter.id].endsWith(filter.value)
			                }
			              ]
			            }
			          ]}
			          defaultPageSize={10}
			          className="-striped -highlight"
			        />
			</div>
			
			{this.renderModal()}
		</div>
		);
	}
}
export default withRouter(StudentListDash);