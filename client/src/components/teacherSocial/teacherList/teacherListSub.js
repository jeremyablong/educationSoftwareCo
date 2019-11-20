import React, { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import matchSorter from 'match-sorter';
import axios from "axios";
import { withRouter } from "react-router";


class TeacherListSub extends Component {
constructor () {
	super();

	this.state = {
    	data: [],
    	modalIsOpen: false
    };
}
	componentDidMount () {
		axios.get("/gather/teacher/data").then((res) => {
			console.log(res.data);
			this.setState({
				data: res.data
			})
		}).catch((err) => {
			console.log(err);
		})
	}
	renderClick = () => {
		console.log("renderClick clicked.");
		this.props.history.push({
          pathname: '/view/teacher/profile',
          state: {
            data: this.state.passDownData
          }
        });
	}
	render() {
		const { data } = this.state;
		console.log("this.state :", this.state);
		return (
			<div style={{ marginLeft: "5px" }}>
				<h6 className="text-center">Click your account to access your timeline</h6>
				 <ReactTable
			          data={data}
			          filterable
			          sortable={false}
			          defaultFilterMethod={(filter, row) =>
			            String(row[filter.id]) === filter.value}
			          columns={[
			          	{
		                  Header: "Teacher's Name",
		                  accessor: "fullName",
		                  id: "fullName",
		                  filterable: true,
		                  accessor: d => {
		                  	return <p onClick={() => {
		                  	this.setState({
		                  		passDownData: d
		                  	}, () => {
		                  		this.renderClick()
		                  	})
		                  }}>{d.fullName}</p>
		                  	this.setState({
		                  		passDownData: d
		                  	}, () => {
		                  		this.renderClick()
		                  	})
		                  }
		                },
			          	 {
		                  Header: "Email",
		                  accessor: "email",
		                  id: "email",
		                  filterable: true,
		                  accessor: d => !d.email ? null : <p onClick={() => {
		                  	this.setState({
		                  		passDownData: d
		                  	}, () => {
		                  		this.renderClick()
		                  	})
		                  }}>{d.email}</p>
		                },
			          	{
		                  Header: "Gender",
		           		  accessor: "gender",
		                  id: "gender",
		                  accessor: d => <p onClick={() => {
		                  	this.setState({
		                  		passDownData: d
		                  	}, () => {
		                  		this.renderClick()
		                  	})
		                  }}>{d.gender}</p>,
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
		                  Header: "City",
		                  id: "city",
		                  accessor: d => <p onClick={() => {
		                  	this.setState({
		                  		passDownData: d
		                  	}, () => {
		                  		this.renderClick()
		                  	})
		                  }}>{d.city}</p>,
		                  filterMethod: (filter, rows) =>
		                    matchSorter(rows, filter.value, { keys: ["CurrencyAndName"] }),
		                  filterAll: true
		                }, 
		                {
		                  Header: "State",
		                  accessor: "state",
		                  id: "state",
		                  filterable: true,
		                  accessor: d => {
		                  	return <p onClick={() => {
		                  	this.setState({
		                  		passDownData: d
		                  	}, () => {
		                  		this.renderClick()
		                  	})
		                  }}>{d.state}</p>
		                  },
		                  filterMethod: (filter, rows) =>
		                  filter.value === rows.CurrentPrice ? rows.CurrentPrice : null
		                }, 
		                {
		                  Header: "Zip-Code",
		                  accessor: "zipcode",
		                  id: "zipcode",
		                  filterable: true,
		                  accessor: d => <p onClick={() => {
		                  	this.setState({
		                  		passDownData: d
		                  	}, () => {
		                  		this.renderClick()
		                  	})
		                  }}>{d.zipCode}</p>,
		                  filterMethod: (filter, row) =>
		                    row[filter.id].startsWith(filter.value) &&
		                    row[filter.id].endsWith(filter.value)
		                
		                
			            }
			          ]}
			          defaultPageSize={10}
			          className="-striped -highlight"
			        />
			</div>
		);
	}
}
export default withRouter(TeacherListSub);