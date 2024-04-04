import ServiceCarousel from "components/Carousels/ServiceCarousel";
import { Container } from "reactstrap";

function Services() {
  return (
    <>
      <div className="section section-services pt-0" id="services-section">
        <Container fluid className="p-5 d-inline">
          <h2 className="title text-center text-info">Services</h2>
          <ServiceCarousel />
        </Container>
      </div>
    </>
  );
}

export default Services;
