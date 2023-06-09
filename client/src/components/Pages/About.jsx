import React from 'react';
import './css/AboutUs.css';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import b1 from '../assets/img/b1.jpg';
import b2 from '../assets/img/b2.jpg';
import b3 from '../assets/img/b3.jpg';

const AvatarSlider = () => {
  const avatars = [b1, b2, b3];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <button className="slider-button">{i + 1}</button>
    )
  };

  return (
    <div className="avatar-slider">
      <Slider {...settings}>
        {avatars.map((avatar, index) => (
          <div key={index} className="avatar-slider-item">
            <img src={avatar} alt={`Avatar ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};


const About = () => {
  return (
    <section className="about-us">
      <div className="about-us-content">
        <h2 className="about-us-title">About Us</h2>
        <p className="about-us-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet euismod lacus non lacinia.
          Duis ullamcorper malesuada quam, vitae iaculis neque efficitur eget.
          Fusce varius, libero in ultricies mollis, nisi felis dignissim arcu, id aliquet nisl metus nec mi.
        </p>
        <AvatarSlider />
      </div>
    </section>
  );
};

export default About;
