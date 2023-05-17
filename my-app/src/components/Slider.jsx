import Carousel from "react-bootstrap/Carousel";

function Slider() {
  return (
    <Carousel>
      <Carousel.Item style={{ height: "650px" }}>
        <img
          style={{ height: "650px" }}
          className="d-block w-100 "
          src={require("./../assets/images/image.jpeg")}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: "650px" }}>
        <img
          style={{ height: "650px" }}
          className="d-block w-100 "
          src={require("./../assets/images/image.jpeg")}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: "650px" }}>
        <img
          className="d-block w-100 "
          style={{ height: "650px" }}
          src={require("./../assets/images/image.jpeg")}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;