import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from '../images/chart.jpg';
import image2 from '../images/roadmap.jpg';

import "../App.css";

const MyCarousel = ({ items }) => {
    return (
        <div className="carousel-container">
             <Carousel showThumbs={false}>
                {items && items.map((item, index) => (
                    <div key={index}>
                        <img className="carousel-image" src={item.imgSrc} alt={item.imgAlt} />
                        
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

const items = [
  { imgSrc: image1, imgAlt: 'Image 1', legend: 'Legend 1' },
  { imgSrc: image2, imgAlt: 'Image 2', legend: 'Legend 2' },
  
];

function CarouselComponent() {
    return (
        <MyCarousel items={items} />
    );
}

export default CarouselComponent;
