import React, { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import axios from "axios";
import _ from "lodash";
import matchSorter from 'match-sorter';

class StudentListDash extends Component {
constructor ()  {
	super();

	this.state = {
		data: []
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
	render() {
		const { data } = this.state;
		return (
		<div>
			<button style={{ width: "100%", marginTop: "30px" }} onClick={this.renderReRender} className="btn btn-outline-danger">Gather Students - Table</button>
			<div style={{ paddingTop: "30px" }}>
			    <ReactTable
			          data={data}
			          filterable
			          sortable={false}
			          defaultFilterMethod={(filter, row) =>
			            String(row[filter.id]) === filter.value}
			          columns={[
			          	 {
		                  Header: "Student Name",
		                  accessor: "studentName",
		                  id: "studentName",
		                  filterable: true,
		                  accessor: d => !d.fullName ? null : d.fullName
		                },
			          	{
		                  Header: "Email",
		           		  accessor: "email",
		                  id: "email",
		                  accessor: d => d.email,
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
		                  accessor: d => d.schoolID,
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
		                  	return d.gender
		                  },
		                  filterMethod: (filter, rows) =>
		                  filter.value === rows.CurrentPrice ? rows.CurrentPrice : null
		                }, 
		                {
		                  Header: "Ethnicity",
		                  accessor: "ethnicity",
		                  id: "ethnicity",
		                  filterable: true,
		                  accessor: d => d.race,
		                  filterMethod: (filter, row) =>
		                    row[filter.id].startsWith(filter.value) &&
		                    row[filter.id].endsWith(filter.value)
		                },
		                {
		                  Header: "Phone Number",
		                  accessor: "phoneNumber",
		                  id: "phoneNumber",
		                  filterable: true,
		                  accessor: d => d.studentPhoneNumber,
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
			                  accessor: d => !d.primaryContact ? "No Data Provided" : d.primaryContact,
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
			                  accessor: d => d.address,
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
		</div>
		);
	}
}
export default StudentListDash;