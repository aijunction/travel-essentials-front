import DemoNavbar from "components/Navbars/DemoNavbar";
import React from "react";
import products from "../../assets/json/Products.json";
// reactstrap components
import { Container, Row, Col } from "reactstrap";
import Item from "views/examples/item.js";
import HeroSection from "components/Headers/HeroSection.js";
const ProductTemplate = ({ pageName, heroTitle, pageDescription }) => {
  return (
    <div>
      <DemoNavbar />
      <HeroSection title={heroTitle} description={pageDescription} />
      <section className="section section-lg pt-lg-0 mt--200">
        <Container>
          <Row className="justify-content-center">
            <Col lg="12">
              <Row className="row-grid">
                {products.map((product, i) => {
                  const cat = product.Categories.split(","); // Assuming categories is a property of the product object
                  if (cat.includes(pageName)) {
                    return (
                      <Item
                        title={product.Title}
                        productId={i}
                        description={product.Description}
                        image={product.img}
                        tags={product.Tags}
                        key={i}
                        url={product.url}
                      />
                    );
                  } else {
                    return null; // You may choose to handle the case when the category doesn't match
                  }
                })}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};
export default ProductTemplate;
