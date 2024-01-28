import CardsFooter from "components/Footers/CardsFooter";
import DemoNavbar from "components/Navbars/DemoNavbar";
import { Col, Container, Row } from "reactstrap";

const AboutUs = () => {
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
                <h1>About Us</h1>

                <h1>Your Ultimate Source for Travel Essentials</h1>

                <p>
                  Finding the perfect travel essentials for your journeys can be
                  a challenge. The endless search for the right items is
                  time-consuming and overwhelming. That's where we come in –
                  your go-to resource for hassle-free travel preparations.
                </p>
                <h2>We're All About Efficiency.</h2>
                <p>
                  We are a
                  <strong>
                    <em>data-driven platform</em>
                  </strong>
                  &nbsp;dedicated to curating comprehensive lists of travel
                  essentials. Our team continuously updates and refines our
                  recommendations, ensuring that you have the most relevant and
                  useful information at your fingertips.
                </p>
                <p>
                  We maintain up-to-date links, so you won't be disappointed by
                  broken or outdated recommendations.
                </p>
                <h2>We Know What Travelers Love.</h2>
                <p>
                  The Travel Essentials team consists of avid travelers and
                  product enthusiasts. We spend our days scouring the market for
                  innovative and unique travel products. Our thorough research,
                  testing, and personal use ensure that the items we recommend
                  will enhance your travel experience. Expect new travel guides
                  regularly to keep you inspired and well-prepared.
                </p>
                <h2>Empowered by Affiliate Income (and Coffee)</h2>
                <p>
                  We believe in transparency. Here's how we sustain our platform
                  without overwhelming you with legal jargon.
                </p>
                <p>
                  When you click on a recommended travel essential and make a
                  purchase, we may earn a commission from the affiliated
                  company. Rest assured, this doesn't affect the price you pay.
                  As proud members of the
                  <a href="https://affiliate-program.amazon.com/home">
                    Amazon Associates program
                  </a>
                  , we earn from qualifying purchases, leveraging the
                  convenience of Amazon for our users.
                </p>

                <h2>Unbiased Recommendations, Always.</h2>
                <p>
                  We prioritize amazing travel essentials over affiliate
                  commissions. While some items may earn us a commission, our
                  primary focus is on creating outstanding travel lists. You'll
                  find a diverse range of products from various sources because
                  quality is our top priority.
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
export default AboutUs;
