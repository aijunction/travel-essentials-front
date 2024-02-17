/*!

=========================================================
* Argon Design System React - v1.1.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";
import SearchBar from "components/SearchBar/Searchbar";

class DemoNavbar extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }
  state = {
    collapseClasses: "",
    collapseOpen: false,
  };

  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out",
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: "",
    });
  };

  render() {
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                <img
                  alt="..."
                  src={require("assets/img/brand/argon-react-white.png")}
                />
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={this.state.collapseClasses}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <img
                          alt="..."
                          src={require("assets/img/brand/argon-react.png")}
                        />
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-ui-04 d-lg-none mr-1" />
                      <span className="nav-link-inner--text">Categories</span>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-xl">
                      <div className="dropdown-menu-inner">
                        <Media
                          className="d-flex align-items-center"
                          href="/luggage"
                        >
                          <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                            <i className="ni ni-briefcase-24" />
                          </div>
                          <Media body className="ml-3">
                            <h6 className="heading text-primary mb-md-1">
                              Luggage
                            </h6>
                          </Media>
                        </Media>
                        <Media
                          className="d-flex align-items-center"
                          href="/electronics"
                        >
                          <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                            <i className="ni ni-headphones" />
                          </div>
                          <Media body className="ml-3">
                            <h6 className="heading text-primary mb-md-1">
                              Electronics
                            </h6>
                          </Media>
                        </Media>
                        <Media
                          className="d-flex align-items-center"
                          href="/accessories"
                          target="_blank"
                        >
                          <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                            <i className="ni ni-glasses-2" />
                          </div>
                          <Media body className="ml-3">
                            <h5 className="heading text-primary mb-md-1">
                              Accessories
                            </h5>
                          </Media>
                        </Media>
                        <Media
                          className="d-flex align-items-center"
                          href="/health"
                        >
                          <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                            <i className="ni ni-support-16" />
                          </div>
                          <Media body className="ml-3">
                            <h5 className="heading text-primary mb-md-1">
                              Health and Safety
                            </h5>
                          </Media>
                        </Media>
                        <Media
                          className="d-flex align-items-center"
                          href="/apparel"
                        >
                          <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                            <i className="ni ni-shop" />
                          </div>
                          <Media body className="ml-3">
                            <h5 className="heading text-primary mb-md-1">
                              Clothing and Apparel
                            </h5>
                          </Media>
                        </Media>
                      </div>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text">Checklists</span>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem to="/weekend-getaway-checklist" tag={Link}>
                        Weekend Getaway Checklist
                      </DropdownItem>
                      <DropdownItem
                        to="/business-travel-essentials-checklist"
                        tag={Link}
                      >
                        Business Trip Checklist
                      </DropdownItem>
                      <DropdownItem
                        to="/adventure-travel-essentials-checklist"
                        tag={Link}
                      >
                        Adventure Travel Checklist
                      </DropdownItem>
                      <DropdownItem
                        to="/international-travel-essentials-checklist"
                        tag={Link}
                      >
                        International Travel Checklist
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text">Traveler</span>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem to="/women-travel-essentials" tag={Link}>
                        Travel Essentials for Women
                      </DropdownItem>
                      <DropdownItem to="/men-travel-essentials" tag={Link}>
                        Travel Essentials for Men
                      </DropdownItem>
                      <DropdownItem to="/baby-travel-essentials" tag={Link}>
                        Travel Essentials for Baby
                      </DropdownItem>
                      <DropdownItem to="/toddler-travel-essentials" tag={Link}>
                        Travel Essentials for Toddler
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <NavItem>
                    <NavLink to="/popular-travel-essentials" tag={Link}>
                      <span className="nav-link-inner--text dash-nav-link">
                        Popular
                      </span>
                    </NavLink>
                  </NavItem>
                </Nav>
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  <NavItem>
                    <SearchBar />
                  </NavItem>
                  <NavItem>
                    <NavLink
                      to="/login-page"
                      tag={Link}
                      className="nav-link-icon"
                      target="_blank"
                    >
                      <span className="nav-link-inner--text">Login</span>
                    </NavLink>
                  </NavItem>

                  <NavItem className="d-none d-lg-block ml-lg-4">
                    <Button
                      className="btn-neutral btn-icon"
                      color="default"
                      to="/register-page"
                      tag={Link}
                      target="_blank"
                    >
                      <span className="btn-inner--icon">
                        <i className="fa fa-plane mr-2" />
                      </span>
                      <span className="nav-link-inner--text ml-1">Go Pro</span>
                    </Button>
                  </NavItem>
                  <NavItem></NavItem>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default DemoNavbar;
