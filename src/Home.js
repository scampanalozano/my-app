import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import prueba from './prueba.jpg';
import Image from 'react-bootstrap/Image'
const Home = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <Image
          src="./holder.js"
          fluid
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="C:\Users\Dell\OneDrive\Imágenes\mono.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  );

}

export default Home;