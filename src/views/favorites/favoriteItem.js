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

// reactstrap components
import { Badge, Button, Card, CardBody, Col } from "reactstrap";

import "../../assets/css/travelEssentials.css";

const FavoriteItem = ({ title, description, tags, url }) => {
  const tagsArr = tags?.split(",");

  return (
    <>
      <Col lg="4" className="item-col">
        <Card className="card-lift--hover shadow border-0 card-height">
          <CardBody className="item-body">
            <img
              src={""}
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
export default FavoriteItem;
