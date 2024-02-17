/*!

=========================================================
* Argon Dashboard React - v1.2.4
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2024 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import { Link, NavLink } from "react-router-dom";
// reactstrap components
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  Navbar,
  Nav,
  Container,
  Media,
  NavItem,
} from "reactstrap";

import "../../assets/css/travelEssentials.css";
const AdminNavbar = (props) => {
  return (
    <>
      <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
        <Container fluid>
          <Link
            className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
            to="/"
          >
            {props.brandText}
          </Link>
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
                    href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/overview?ref=adsr-navbar"
                    target="_blank"
                  >
                    <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                      <i className="ni ni-spaceship" />
                    </div>
                    <Media body className="ml-3">
                      <h6 className="heading text-primary mb-md-1">Luggage</h6>
                    </Media>
                  </Media>
                  <Media
                    className="d-flex align-items-center"
                    href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/colors?ref=adsr-navbar"
                    target="_blank"
                  >
                    <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                      <i className="ni ni-palette" />
                    </div>
                    <Media body className="ml-3">
                      <h6 className="heading text-primary mb-md-1">
                        Electronics
                      </h6>
                    </Media>
                  </Media>
                  <Media
                    className="d-flex align-items-center"
                    href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/alert?ref=adsr-navbar"
                    target="_blank"
                  >
                    <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                      <i className="ni ni-ui-04" />
                    </div>
                    <Media body className="ml-3">
                      <h5 className="heading text-warning mb-md-1">
                        Accessories
                      </h5>
                    </Media>
                  </Media>
                  <Media
                    className="d-flex align-items-center"
                    href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/alert?ref=adsr-navbar"
                    target="_blank"
                  >
                    <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                      <i className="ni ni-ui-04" />
                    </div>
                    <Media body className="ml-3">
                      <h5 className="heading text-warning mb-md-1">
                        Health and Safety
                      </h5>
                    </Media>
                  </Media>
                  <Media
                    className="d-flex align-items-center"
                    href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/alert?ref=adsr-navbar"
                    target="_blank"
                  >
                    <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                      <i className="ni ni-ui-04" />
                    </div>
                    <Media body className="ml-3">
                      <h5 className="heading text-warning mb-md-1">
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
              <NavLink
                to="/popular-travel-essentials"
                tag={Link}
                className="nav-link-icon"
              >
                <span className="nav-link-inner--text dash-nav-link">
                  Popular
                </span>
              </NavLink>
            </NavItem>
          </Nav>
          <Form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
            <FormGroup className="mb-0">
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fas fa-search" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Search" type="text" />
              </InputGroup>
            </FormGroup>
          </Form>
          <Nav className="align-items-center d-none d-md-flex" navbar>
            <UncontrolledDropdown nav>
              <DropdownToggle className="pr-0" nav>
                <Media className="align-items-center"></Media>
              </DropdownToggle>
            </UncontrolledDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default AdminNavbar;
