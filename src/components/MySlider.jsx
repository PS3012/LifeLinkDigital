// MySlider.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";

const MySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Slide every 3 seconds
  };

  return (
    <Slider {...settings}>
      {/* First Slide */}
      <div className="container-fluid pt-5  hero-header mb-5">
        <div className="container pt-5">
          <div className="row g-5 pt-5">
            <div className="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
              <div className="btn btn-sm border rounded-pill text-dark px-3 mb-3 animated slideInRight">
                Life Link Digital
              </div>
              <h1 className="display-4 text-dark mb-4 animated slideInRight">
                Artificial Intelligence for Your Business
              </h1>
              <p className="text-dark mb-4 animated slideInRight">
                Empowering Your Business with Intelligent Solutions: Harness the Power of Artificial Intelligence to
                Optimize, Innovate, and Excel in the Digital Era.
              </p>
              <a href="" className="btn btn-dark py-sm-3 px-sm-5 rounded-pill me-3 animated slideInRight">
                Read More
              </a>
              <a href="" className="btn btn-outline-dark py-sm-3 px-sm-5 rounded-pill animated slideInRight">
                Contact Us
              </a>
            </div>
            <div className="col-lg-6 align-self-end text-center text-lg-end">
              <img className="img-head " src="/3dd.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* Second Slide */}
      <div className="container-fluid pt-5 section2 hero-header mb-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="about-img">
                <img className="img-fluid" src="/about-img.jpg" />
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <div className="btn btn-sm border rounded-pill text-white px-3 mb-3">About Us</div>
              <h1 className="mb-4">We Make Your Business Smarter with Artificial Intelligence</h1>
              <p className="mb-2">
                Transforming Possibilities into Reality: At Life Link Digital, we specialize in making your business
                smarter through cutting-edge Artificial Intelligence.{" "}
              </p>
              <p className="mb-4">
                Our solutions seamlessly integrate with your operations, unlocking new levels of efficiency and
                innovation. With a commitment to excellence, we elevate your business to thrive in the ever-evolving
                digital landscape.
              </p>
              <div className="row g-3">
                <div className="col-sm-6">
                  <h6 className="mb-3">
                    <i className="fa fa-check text-primary me-2"></i>Award Winning
                  </h6>
                  <h6 className="mb-0">
                    <i className="fa fa-check text-primary me-2"></i>Professional Staff
                  </h6>
                </div>
                <div className="col-sm-6">
                  <h6 className="mb-3">
                    <i className="fa fa-check text-primary me-2"></i>24/7 Support
                  </h6>
                  <h6 className="mb-0">
                    <i className="fa fa-check text-primary me-2"></i>Fair Prices
                  </h6>
                </div>
              </div>
              <div className="d-flex align-items-center mt-4">
                <a className="btn btn-dark rounded-pill px-4 me-3" href="">
                  Read More
                </a>
                <a className="btn btn-outline-dark btn-square me-3" href="">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a className="btn btn-outline-dark btn-square me-3" href="">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a className="btn btn-outline-dark btn-square me-3" href="">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a className="btn btn-outline-dark btn-square" href="">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Third Slide */}
      <div className="container-fluid pt-5  hero-header mb-5">
        <div className="container pt-5">
          <div className="row g-5 pt-5">
            <div className="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
              <div className="btn btn-sm border rounded-pill text-dark px-3 mb-3 animated slideInRight">
                Life Link Digital
              </div>
              <h1 className="display-4 text-dark mb-4 animated slideInRight">
                Artificial Intelligence for Your Business
              </h1>
              <p className="text-dark mb-4 animated slideInRight">
                Empowering Your Business with Intelligent Solutions: Harness the Power of Artificial Intelligence to
                Optimize, Innovate, and Excel in the Digital Era.
              </p>
              <a href="" className="btn btn-dark py-sm-3 px-sm-5 rounded-pill me-3 animated slideInRight">
                Read More
              </a>
              <a href="" className="btn btn-outline-dark py-sm-3 px-sm-5 rounded-pill animated slideInRight">
                Contact Us
              </a>
            </div>
            <div className="col-lg-6 align-self-end text-center text-lg-end">
              <img className="img-head " src="/3dd.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default MySlider;
