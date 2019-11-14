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
				<SideNav
				    onSelect={(selected) => {
				        console.log("selected :", selected)
				        this.props.history.push("/" + selected);
				    }}
				>
				    <SideNav.Toggle />
					    <SideNav.Nav defaultSelected="home">
					        <NavItem eventKey="home">
					            <NavIcon>
					                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
					            </NavIcon>
					            <NavText>
					                Home
					            </NavText>
					        </NavItem>
					        <NavItem eventKey="charts">
					            <NavIcon>
					                <i className="fa fa-fw fa-bar-chart" style={{ fontSize: '1.75em' }} />
					            </NavIcon>
					            <NavText>
					                Page 1
						            </NavText>
						            <NavItem eventKey="charts/linechart">
						                <NavText>
						                    Line Chart
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
				<Jumbo />		
			</div>
		);
	}
}
export default withRouter(SideNavigation);