import CardsFooter from "components/Footers/CardsFooter";
import DemoNavbar from "components/Navbars/DemoNavbar";
import { Col, Container, Row } from "reactstrap";

const FAQ = () => {
  return (
    <>
      <DemoNavbar />
      <main>
        <div className="position-relative">
          <section className="section section-shaped" id="privacy-nav">
            <div className="shape shape-style-1 shape-default"></div>
          </section>
        </div>
        <Container className="py-lg-md d-flex">
          <div className="col px-0">
            <Row>
              <Col lg="12">
                <h1>Frequently Asked Questions</h1>

                <h2>1. What is TravelEssentials.io?</h2>
                <p>
                  TravelEssentials.io is a curated platform providing lists of
                  essential items for various travel occasions and types of
                  travelers. We aim to simplify your travel preparations by
                  offering personalized recommendations and checklists.
                </p>
                <h2>2. How can I use the travel checklists on your site?</h2>
                <p>
                  Our travel checklists are designed to help you stay organized.
                  Simply browse through our lists based on your travel occasion
                  or type, and use them as a guide for packing. You can also
                  sign up for a pro account to save your favorite items and
                  enjoy a more personalized and ad-free experience.
                </p>

                <h2>3. What are the benefits of a pro account?</h2>
                <p>
                  A pro account allows you to save your favorite travel
                  essentials, receive personalized recommendations, and enjoy an
                  ad-free browsing experience. Additionally, pro account holders
                  receive exclusive emails with discounts on travel items from
                  time to time.
                </p>

                <h2>4. How do you choose the items featured on your site?</h2>
                <p>
                  We are a data-driven platform, continuously updating our lists
                  based on user preferences and feedback. Our team of travel
                  enthusiasts researches, and curates the best and most relevant
                  travel essentials to ensure a great user experience.
                </p>

                <h2>5. Can I trust the recommendations on your site?</h2>
                <p>
                  Absolutely! Our team is dedicated to providing unbiased
                  recommendations. While we may earn affiliate commissions for
                  some items, our primary goal is to create valuable travel
                  lists. You'll find a diverse range of products from different
                  sources to meet your specific needs.
                </p>

                <h2>6. How do you make money?</h2>
                <p>
                  We generate income through affiliate partnerships. When users
                  click on a recommended travel item and make a purchase, we may
                  earn a commission from the affiliated company. Rest assured,
                  this does not impact the price you pay. We are transparent
                  about our sources of income to build and maintain your trust.
                </p>

                <h2>7. How can I contact travelessentials.io for support?</h2>
                <p>
                  If you have any questions, concerns, or need assistance, you
                  can reach out to our support team through email
                  info@theaijunction.com. We value your feedback and are here to
                  ensure you have a seamless experience on our platform.
                </p>

                <h2>8. Do you have a mobile app?</h2>
                <p>
                  Currently, we do not have a dedicated mobile app. However, our
                  website is designed to be mobile-friendly, providing a
                  seamless experience on both desktop and mobile devices. You
                  can access our curated lists and travel checklists on the go.
                </p>
              </Col>
            </Row>
          </div>
        </Container>
      </main>
      <CardsFooter />
    </>
  );
};
export default FAQ;
