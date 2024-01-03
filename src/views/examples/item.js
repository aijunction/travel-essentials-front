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
import React, { useState } from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import { useHistory } from "react-router-dom";
// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import Download from "../IndexSections/Download.js";
import { getAuth } from "firebase/auth";
import { app } from "firebase.js";
const Item = ({ productId, title }) => {
  const [isFavorite, setFavorite] = useState(false);
  const auth = getAuth();
  const history = useHistory();
  const handleFavoriteClick = async () => {
    // Toggle the favorite status when the heart icon is clicked
    setFavorite((prevFavorite) => !prevFavorite);

    // Get the current user
    const user = auth.currentUser;
    // Update Firestore with the new favorite status
    if (user) {
      const userId = user.uid;
      const favoritesRef = app
        .firestore()
        .collection("users")
        .doc(userId)
        .collection("favorites");

      if (isFavorite) {
        await favoritesRef.doc(productId).delete();
      } else {
        await favoritesRef
          .doc(productId)
          .set({ timestamp: app.firestore.FieldValue.serverTimestamp() });
      }
    }
  };
  return (
    <>
      <Col lg="4">
        <Card className="card-lift--hover shadow border-0">
          <CardBody className="py-5">
            <div
              className="icon icon-shape icon-shape-primary rounded-circle mb-4"
              onClick={handleFavoriteClick}
            >
              <i
                className="ni ni-favourite-28"
                style={{
                  cursor: "pointer",
                  color: isFavorite ? "red" : "gray",
                }}
              />
              {/* </button> */}
            </div>
            <h6 className="text-primary text-uppercase">Download Argon</h6>
            <p className="description mt-3">
              Argon is a great free UI package based on Bootstrap 4 that
              includes the most important components and features.
            </p>
            <div>
              <Badge color="primary" pill className="mr-1">
                design
              </Badge>
              <Badge color="primary" pill className="mr-1">
                system
              </Badge>
              <Badge color="primary" pill className="mr-1">
                creative
              </Badge>
            </div>
            <Button
              className="mt-4"
              color="primary"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              Learn more
            </Button>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};
export default Item;
