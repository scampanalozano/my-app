import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image'
import imagen1 from './imagen1.jpg';
import imagen2 from './imagen2.jpg';
import imagen3 from './imagen3.jpg';
import './Home.css'
const Home = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <Image className="imagen1"
          src={imagen1}
          fluid
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image className="imagen2"
          src={imagen2}
          fluid
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image className="imagen3"
          src={imagen3}
          fluid
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  );

}

export default Home;