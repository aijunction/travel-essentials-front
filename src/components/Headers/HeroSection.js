const { Container, Row, Col, Button } = require("reactstrap");

const HeroSection = ({ title, description }) => {
  return (
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
                  {title} <span>completed with examples</span>
                </h1>
                <p className="lead text-white">{description}</p>
                <div className="btn-wrapper">
                  <Button
                    className="btn-icon mb-3 mb-sm-0"
                    color="info"
                    href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/alerts?ref=adsr-landing-page"
                  >
                    <span className="btn-inner--icon mr-1">
                      <i className="fa fa-code" />
                    </span>
                    <span className="btn-inner--text">Components</span>
                  </Button>
                  <Button
                    className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                    color="default"
                    href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                  >
                    <span className="btn-inner--icon mr-1">
                      <i className="ni ni-cloud-download-95" />
                    </span>
                    <span className="btn-inner--text">Download React</span>
                  </Button>
                </div>
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
            <polygon className="fill-white" points="2560 0 2560 100 0 100" />
          </svg>
        </div>
      </section>
      {/* 1st Hero Variation */}
    </div>
  );
};
export default HeroSection;
