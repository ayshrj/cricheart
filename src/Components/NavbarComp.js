import logo from '../logo.svg';
import React, { Component } from 'react'
import { Navbar, NavDropdown, Form, FormControl, Button, Nav } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from './Home';
import Schedule from './Schedule';
import Archives from './Archives';
import Series from './Series';
import Teams from './Teams';
import Players from './Players';
import '../CSS/Navbar.css';

export default class NavbarComp extends Component {
    render() {
        // console.log(this.props.user1)
        return (
            <Router>
                <div>
                    <div>
                        <Navbar bg="dark" variant={"dark"} expand="lg">
                            <Navbar.Brand class="navbar fixed-top navbar-icon-top navbar-expand-lg navbar-dark bg-dark"><img src={logo} width="50" height="50" /> </Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                                <Nav
                                    className="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark"
                                    // style={{ maxHeight: '100px' }}
                                    navbarScroll
                                >
                                    {/* <Nav.Link as={Link} to="/home"> */}
                                    <Nav.Link as={Link} to="/">
                                            <div class="navbar-icon-top"><i class="fa fa-home"></i></div>
                                            Home
                                            <span class="sr-only">(current)</span>
                                    </Nav.Link> 

                                    <Nav.Link as={Link} to="/schedule">
                                        <div class="navbar-icon-top"><i class="fa fa-calendar"></i></div>
                                        Schedule
                                        <span class="sr-only">(current)</span>
                                    </Nav.Link>

                                    <Nav.Link as={Link} to="/archives">
                                        <div class="navbar-icon-top"><i class="fa fa-archive"></i></div>
                                        Archives
                                        <span class="sr-only">(current)</span>
                                    </Nav.Link>

                                    <Nav.Link as={Link} to="/series">
                                        <div class="navbar-icon-top"><i class="fa fa-clipboard-list"></i></div>
                                        Series
                                        <span class="sr-only">(current)</span>
                                    </Nav.Link>

                                    <Nav.Link as={Link} to="/teams">
                                        <div class="navbar-icon-top"><i class="fa fa-users"></i></div>
                                        Teams
                                        <span class="sr-only">(current)</span>
                                    </Nav.Link>

                                    <Nav.Link as={Link} to="/players">
                                        <div class="navbar-icon-top"><i class="fa fa-user"></i></div>
                                        Players
                                        <span class="sr-only">(current)</span>
                                    </Nav.Link>

                                </Nav>

                            </Navbar.Collapse>
                        </Navbar>
                    </div>
                </div>
                <div>
                    <Switch>
                        <Route path="/schedule">
                            <Schedule/>
                        </Route>

                        <Route path="/archives">
                            <Archives />
                        </Route>
                                                
                        <Route path="/series">
                            <Series />
                        </Route>
                                                
                        <Route path="/teams">
                            <Teams />
                        </Route>
                        
                        <Route path="/players">
                            <Players />
                        </Route>

                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }

    
}
