import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home1.css';


import { faAmbulance, faAnchor, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Carousel,CarouselItem} from 'react-bootstrap';
const Home1 = () => {
    return (
      <div>


        {/*<div className='container text-center bg-danger'>
        <Carousel fade>
        <Carousel.Item className='carousel-inner'>
          <img
            className="d-block w-100"
            src="https://tse3.mm.bing.net/th?id=OIP.KzfUsDt9i3wQGN8bas79AgHaIq&pid=Api&P=0&w=144&h=168"/>
          <Carousel.Caption>
            <h3>Bata Mens Winter Ankle Boots-<br/> Casual 1|Bata</h3>
            <p><a href='http://www.bata.pt'>1500.1500</a>.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src="https://tse1.mm.bing.net/th?id=OIP.aEY6pK5JlBOFn2_vlBRlSQHaIq&pid=Api&P=0&w=137&h=160" />
      
          <Carousel.Caption>
            <h3>Bata Mens Winter Ankle Boots-<br/> Casual 2|Bata</h3>
            <p><a href='http://www.bata.pt'>1500.1500</a>.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100"
            src="https://tse3.mm.bing.net/th?id=OIP.oWbClAKyi8R-B1puC4aqBgHaHa&pid=Api&P=0&w=187&h=187"/>
      
          <Carousel.Caption>
            <h3>Bata Mens Winter Ankle Boots-<br/> Casual 3|Bata</h3>
            <p><a href='http://www.bata.pt'>1500.1500</a>.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    *
    */}

    <Carousel>
  <Carousel.Item interval={300}>
    <img
      className="d-block  me-1" style={{height:"500px",width:"800px"}}
      src="https://tse3.mm.bing.net/th?id=OIP.oWbClAKyi8R-B1puC4aqBgHaHa&pid=Api&P=0&w=187&h=187"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Bata Mens Winter Ankle Boots-<br/> Casual </h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={300}>
    <img
      className="d-block" style={{height:"500px",width:"600px"}}
      src="https://tse1.mm.bing.net/th?id=OIP.aEY6pK5JlBOFn2_vlBRlSQHaIq&pid=Api&P=0&w=137&h=160"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Bata Mens Summer Ankle Boots-<br/> Casual </h3>
      <p><a href='http://www.bata.pt'>1500.1500</a></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={300}>
    <img
      className="d-block" style={{height:"500px",width:"600px"}}
      src="https://tse3.mm.bing.net/th?id=OIP.KzfUsDt9i3wQGN8bas79AgHaIq&pid=Api&P=0&w=144&h=168"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Bata Mens Winter Ankle Boots-<br/> Casual </h3>
      <p><a href='http://www.bata.pt'>1500.1500</a></p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    

    </div>
    );
};



export default Home1;