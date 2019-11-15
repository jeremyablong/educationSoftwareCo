import React, { Component } from 'react';
import SideNavigation from "../../../components/navigation/home/index.js";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import Navigation from "../../../components/navigation/home/navbar.js";
import RegisterHelper from "./registerHelper.js";
import { Link } from "react-router-dom";

class RegisterStudent extends Component {
	render() {
		return (
			<div>
				<Navigation />
				<SideNav
				    onSelect={(selected) => {
				        console.log("selected :", selected)
				        this.props.history.push("/" + selected);
				    }}
				    style={{ height: "150%" }}
				>
				    <SideNav.Toggle />
					    <SideNav.Nav defaultSelected="homepage">
					        <NavItem eventKey="homepage">
					            <NavIcon>
					                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
					            </NavIcon>
					            <NavText>
					                Homepage
					            </NavText>
					        </NavItem>
					        <NavItem eventKey="charts">
					            <NavIcon>
					                <i className="fa fa-fw fa-bar-chart" style={{ fontSize: '1.75em' }} />
					            </NavIcon>
					            <NavText>
					                Registration
						            </NavText>
						            <NavItem eventKey="register/student">
						                <NavText>
						                    Register A Student
						                </NavText>
						            </NavItem>
						            <NavItem eventKey="charts/barchart">
						                <NavText>
						                    Bar Chart
						                </NavText>
						            </NavItem>
						        </NavItem>
						        <NavItem eventKey="part">
						            <NavIcon>
						                <i className="fa fa-fw fa-bar-chart" style={{ fontSize: '1.75em' }} />
					            </NavIcon>
					            <NavText>
					                Page 2
					            </NavText>
					            <NavItem eventKey="part/one">
					                <NavText>
					                    Line Chart
					                </NavText>
					            </NavItem>
					            <NavItem eventKey="part/two">
					                <NavText>
					                    Bar Chart
					                </NavText>
					            </NavItem>
					        </NavItem>
					        <NavItem eventKey="section">
					            <NavIcon>
					                <i className="fa fa-fw fa-bar-chart" style={{ fontSize: '1.75em' }} />
					            </NavIcon>
					            <NavText>
					                Page 3
					            </NavText>
					            <NavItem eventKey="section/one">
					                <NavText>
					                    Line Chart
					                </NavText>
					            </NavItem>
					            <NavItem eventKey="section/two">
					                <NavText>
					                    Bar Chart
					                </NavText>
					            </NavItem>
					        </NavItem>
					        <NavItem eventKey="magic">
					            <NavIcon>
					                <i className="fa fa-fw fa-bar-chart" style={{ fontSize: '1.75em' }} />
					            </NavIcon>
					            <NavText>
					               	Magic
					            </NavText>
					            <NavItem eventKey="magic/linechart">
					                <NavText>
					                    Line Chart
					                </NavText>
					            </NavItem>
					            <NavItem eventKey="magic/barchart">
					                <NavText>
					                    Bar Chart
					                </NavText>
					            </NavItem>
					        </NavItem>

				    </SideNav.Nav>
				</SideNav>
				<h4 className="text-center" style={{ paddingTop: "20px" }}> <b>Quick Registration Students Section (You can add additional information in the <Link to="/manage/student/profile">manage student section</Link>) </b></h4>
				<RegisterHelper />
			</div>
		);
	}
}
export default RegisterStudent;