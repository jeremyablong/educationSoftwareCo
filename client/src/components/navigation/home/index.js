import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import Navigation from "./navbar.js";
import Jumbo from "../../universal/landing/index.js";

class SideNavigation extends Component {
	render() {
		return (
			<div>
				<Navigation />
				<div>
				<SideNav
				    onSelect={(selected) => {
				        console.log("selected :", selected)
				        this.props.history.push("/" + selected);

				    }} style={{ height: "200%" }}>
				    <SideNav.Toggle />
					    <SideNav.Nav  defaultSelected="homepage">
					        <NavItem eventKey="homepage">
					            <NavIcon>
					                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
					            </NavIcon>
					            <NavText>
					                Homepage
					            </NavText>
					        </NavItem>
					        <NavItem eventKey="enrollment">
					            <NavIcon>
					                <i className="far fa-registered" style={{ fontSize: '1.75em' }} />
					            </NavIcon>
					            <NavText>
					                Registration
						            </NavText>
						            <NavItem eventKey="enrollment/new/student">
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
				</div>
				<Jumbo />		
			</div>
		);
	}
}
export default withRouter(SideNavigation);