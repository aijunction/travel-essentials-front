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

import { useNavigate } from "react-router-dom";
// reactstrap components
import { Badge, Button, Card, CardBody, Col } from "reactstrap";

import "../../assets/css/travelEssentials.css";
import { collection, doc, setDoc, deleteDoc } from "firebase/firestore";
import { auth } from "firebase.js";
import { database } from "firebase.js";
const Item = ({ productId, title, image, description, tags, url }) => {
  const [isFavorite, setFavorite] = useState(false);

  const navigate = useNavigate();
  const tagsArr = tags?.split(",");
  const dynamicImage = require(`../../assets/img/productImages/${image}`);

  const handleFavoriteClick = async (name, description, tags, image, url) => {
    // Toggle the favorite status when the heart icon is clicked
    setFavorite((prevFavorite) => !prevFavorite);

    // Get the current user
    const user = auth.currentUser;
    console.log(user);

    //Update Firestore with the new favorite status
    if (user) {
      const userId = user.uid;
      const userDocRef = doc(collection(database, "users"), userId);
      const favoritesRef = collection(userDocRef, "favorites");

      try {
        if (isFavorite) {
          await deleteDoc(favoritesRef);
        } else {
          const newFavoriteDocRef = doc(favoritesRef); // Create DocumentReference
          await setDoc(newFavoriteDocRef, {
            timestamp: new Date().toISOString(),
            name: name,
            description: description,
            tags: tags,
            url: url,
            image: image,
          });
        }

        // Redirect to the user's profile page after updating favorites
        navigate("/admin/user-profile");
      } catch (error) {
        console.error("Error updating favorites:", error);
        // Handle error appropriately, maybe show a message to the user
      }
    } else {
      // User is not logged in, handle this case appropriately
      console.log("User not logged in.");
      // Maybe show a message to the user asking them to log in
    }

    // Redirect to the user's profile page after updating favorites
    //navigate("admin/user-profile"); // Replace with your actual profile page path
  };
  return (
    <>
      <Col lg="4" className="item-col">
        <Card className="card-lift--hover shadow border-0 card-height">
          <CardBody className="item-body">
            <div className="icon-right">
              <div
                className="icon icon-shape fav-icon-shape icon-shape-primary rounded-circle mb-4"
                onClick={() => {
                  handleFavoriteClick(title, description, tags, image, url);
                }}
              >
                <i
                  className="ni ni-favourite-28"
                  style={{
                    cursor: "pointer",
                    color: isFavorite ? "red" : "gray",
                  }}
                />
              </div>
            </div>
            <img
              src={dynamicImage}
              alt="blue travel neck pillow"
              className="product-img"
            />
            <h6 className="text-primary text-uppercase">{title}</h6>
            <p className="description mt-3">{description}</p>
            <div>
              {tagsArr.map((tag, i) => (
                <Badge color="primary" pill className="mr-1" key={i}>
                  {tag}
                </Badge>
              ))}
            </div>
            <Button
              className="mt-4"
              color="primary"
              href={url}
              onClick={(e) => {
                e.preventDefault();
                window.open(`${url}`, "_blank");
              }}
            >
              Buy on Amazon
            </Button>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};
export default Item;
