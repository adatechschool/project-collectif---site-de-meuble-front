import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

// Remplacer les images ci-dessous par les images de l'API présente dans le carousel de description
var imagesOfItems = [
  "https://static8.depositphotos.com/1343665/821/i/600/depositphotos_8213644-stock-photo-interior-design-modern-white-furniture.jpg",
  "https://www.nidouillet.com/wp-content/uploads/2016/08/des-meubles.jpg",
  "https://madeinmarseille.net/actualites-marseille/2018/04/commode-meuble-vintage-metropolis-e1524585616709.jpg",
];
class BootstrapCarouselComponent extends React.Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row"></div>
          <div className="row">
            <div className="col-12">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={imagesOfItems[0]}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>Nom du meuble</h3>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={imagesOfItems[1]}
                    alt="Second slide"
                  />

                  <Carousel.Caption>
                    <h3>Nom du meuble</h3>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={imagesOfItems[2]}
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <h3>Nom du meuble</h3>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BootstrapCarouselComponent;
