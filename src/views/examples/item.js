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
import { useHistory, useNavigate } from "react-router-dom";
// reactstrap components
import { Badge, Button, Card, CardBody, Col } from "reactstrap";

import "/Users/yvetteagyei/Documents/GitHub/travel-essentials-front/src/assets/css/travelEssentials.css";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";
import { auth } from "firebase.js";
import { database } from "firebase.js";
const Item = ({ productId, title }) => {
  const [isFavorite, setFavorite] = useState(false);

  const navigate = useNavigate();

  const handleFavoriteClick = async () => {
    // Toggle the favorite status when the heart icon is clicked
    setFavorite((prevFavorite) => !prevFavorite);

    // Get the current user
    const user = auth.currentUser;
    console.log(user);

    // Update Firestore with the new favorite status
    if (user) {
      const userId = user.uid;
      const userDocRef = doc(collection(database, "users"), userId);
      const favoritesRef = collection(userDocRef, "favorites");
      const docRef = doc(favoritesRef, productId);
      if (isFavorite) {
        await setDoc(docRef, {
          /* data */
        });
      } else {
        await setDoc(docRef, {
          timestamp: serverTimestamp(),
        });
      }

      // Redirect to the user's profile page after updating favorites
      navigate("/profile-page"); // Replace with your actual profile page path
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
            <img
              src={require("/Users/yvetteagyei/Documents/GitHub/travel-essentials-front/src/assets/img/productImages/travelPillow.jpg")}
              alt="blue travel neck pillow"
              className="product-img"
            />
            <h6 className="text-primary text-uppercase">{title}</h6>
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
