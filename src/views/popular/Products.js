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

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections

import Item from "../examples/item.js";
import products from "../../assets/json/Products.json";

export default function Products() {
  const [isFavorite, setFavorite] = useState(false);

  const handleFavoriteClick = () => {
    // Toggle the favorite status when the heart icon is clicked
    setFavorite((prevFavorite) => !prevFavorite);

    // You can also send a request to your server to update the user's favorite status in the database
    // Example: sendRequestToUpdateFavoriteStatus(productId, !isFavorite);
  };
  return (
    <>
      <DemoNavbar />
      <main>
        <div className="position-relative">
          {/* shape Hero */}
          <section className="section section-lg section-shaped pb-250">
            <div className="shape shape-style-1 shape-default">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <Container className="py-lg-md d-flex">
              <div className="col px-0">
                <Row>
                  <Col lg="6">
                    <h1 className="display-3 text-white">
                      Popular Travel Essentials{" "}
                    </h1>
                    <p className="lead text-white">
                      Forget frantic packing! Dive into our curated list of the
                      web's most popular travel essentials. From must-have
                      basics to surprising game-changers, we've got you covered
                      across every category. Conquer any adventure, organized
                      and confident. Bon voyage!
                    </p>
                  </Col>
                </Row>
              </div>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          {/* 1st Hero Variation */}
        </div>
        <section className="section section-lg pt-lg-0 mt--200">
          <Container>
            <Row className="justify-content-center">
              <Col lg="12">
                <Row className="row-grid">
                  {products.map((product, i) => (
                    <Item
                      title={product.Title}
                      productId={i}
                      description={product.Description}
                      image={product.img}
                      tags={product.Tags}
                      key={i}
                      url={product.url}
                    />
                  ))}
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
      <CardsFooter />
    </>
  );
}
