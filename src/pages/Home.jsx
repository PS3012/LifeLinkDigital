import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faArrowRight, faBrain, faCheck, faGraduationCap, faPowerOff, faRobot, faUsers } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Accordion } from "react-bootstrap"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function Home() {
    return (
        <>

            {/* <!-- Hero Start --> */}
            <div className="container-fluid pt-5 bg-themeColor hero-header mb-5">
                <div className="container pt-5">
                    <div className="row g-5 pt-5">
                        <div className="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
                            <div className="btn btn-sm border rounded-pill text-white px-3 mb-3 animated slideInRight">AI.Tech</div>
                            <h1 className="display-4 text-white mb-4 animated slideInRight">Artificial Intelligence for Your Business</h1>
                            <p className="text-white mb-4 animated slideInRight">Tempor rebum no at dolore lorem clita rebum rebum ipsum
                                rebum stet dolor sed justo kasd. Ut dolor sed magna dolor sea diam. Sit diam sit</p>
                            <a href="" className="btn btn-light py-sm-3 px-sm-5 rounded-pill me-3 animated slideInRight">Read More</a>
                            <a href="" className="btn btn-outline-light py-sm-3 px-sm-5 rounded-pill animated slideInRight">Contact Us</a>
                        </div>
                        <div className="col-lg-6 align-self-end text-center text-lg-end">
                            <img className="img-fluid" src="/hero-img.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Hero End --> */}


            {/* <!-- About Start --> */}
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                            <div className="about-img">
                                <img className="img-fluid" src="/about-img.jpg" />
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">About Us</div>
                            <h1 className="mb-4">We Make Your Business Smarter with Artificial Intelligence</h1>
                            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam
                                amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus
                                clita duo justo et tempor eirmod magna dolore erat amet</p>
                            <p className="mb-4">Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no
                                labore lorem sit. Sanctus clita duo justo et tempor.</p>
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <h6 className="mb-3"><i className="fa fa-check text-primary me-2"></i>Award Winning</h6>
                                    <h6 className="mb-0"><i className="fa fa-check text-primary me-2"></i>Professional Staff</h6>
                                </div>
                                <div className="col-sm-6">
                                    <h6 className="mb-3"><i className="fa fa-check text-primary me-2"></i>24/7 Support</h6>
                                    <h6 className="mb-0"><i className="fa fa-check text-primary me-2"></i>Fair Prices</h6>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mt-4">
                                <a className="btn btn-primary rounded-pill px-4 me-3" href="">Read More</a>
                                <a className="btn btn-outline-primary btn-square me-3" href="">
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </a>
                                <a className="btn btn-outline-primary btn-square me-3" href="">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                                <a className="btn btn-outline-primary btn-square me-3" href="">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                                <a className="btn btn-outline-primary btn-square" href="">
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- About End --> */}


            {/* <!-- Service Start --> */}
            <div className="container-fluid bg-light mt-5 py-5">
                <div className="container py-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
                            <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">Our Services</div>
                            <h1 className="mb-4">Our Excellent AI Solutions for Your Business</h1>
                            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam
                                amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus
                                clita duo justo et tempor eirmod magna dolore erat amet</p>
                            <a className="btn btn-primary rounded-pill px-4" href="">Read More</a>
                        </div>
                        <div className="col-lg-7">
                            <div className="row g-4">
                                <div className="col-md-6">
                                    <div className="row g-4">
                                        <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
                                            <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                                                <div className="service-icon btn-square">
                                                    <FontAwesomeIcon icon={faRobot} />
                                                </div>
                                                <h5 className="mb-3">Robotic Automation</h5>
                                                <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet
                                                    diam sed stet lorem.</p>
                                                <a className="btn px-3 mt-auto mx-auto" href="">Read More</a>
                                            </div>
                                        </div>
                                        <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                                            <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                                                <div className="service-icon btn-square">
                                                    <FontAwesomeIcon icon={faPowerOff} />
                                                </div>
                                                <h5 className="mb-3">Machine learning</h5>
                                                <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet
                                                    diam sed stet lorem.</p>
                                                <a className="btn px-3 mt-auto mx-auto" href="">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 pt-md-4">
                                    <div className="row g-4">
                                        <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                                            <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                                                <div className="service-icon btn-square">
                                                    <FontAwesomeIcon icon={faGraduationCap} />
                                                </div>
                                                <h5 className="mb-3">Education & Science</h5>
                                                <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet
                                                    diam sed stet lorem.</p>
                                                <a className="btn px-3 mt-auto mx-auto" href="">Read More</a>
                                            </div>
                                        </div>
                                        <div className="col-12 wow fadeIn" data-wow-delay="0.7s">
                                            <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                                                <div className="service-icon btn-square">
                                                    <FontAwesomeIcon icon={faBrain} />
                                                </div>
                                                <h5 className="mb-3">Predictive Analysis</h5>
                                                <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet
                                                    diam sed stet lorem.</p>
                                                <a className="btn px-3 mt-auto mx-auto" href="">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Service End --> */}


            {/* <!-- Feature Start --> */}
            <div className="container-fluid bg-themeColor feature pt-5">
                <div className="container pt-5">
                    <div className="row g-5">
                        <div className="col-lg-6 align-self-center mb-md-5 pb-md-5 wow fadeIn" data-wow-delay="0.3s">
                            <div className="btn btn-sm border rounded-pill text-white px-3 mb-3">Why Choose Us</div>
                            <h1 className="text-white mb-4">We&lsquo;re Best in AI Industry with 10 Years of Experience</h1>
                            <p className="text-light mb-4">Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed
                                stet no labore lorem sit. Sanctus clita duo justo et tempor</p>
                            <div className="d-flex align-items-center text-white mb-3">
                                <div className="btn-sm-square bg-white text-primary rounded-circle me-3">
                                    <FontAwesomeIcon icon={faCheck} />
                                </div>
                                <span>Diam dolor diam ipsum et tempor sit</span>
                            </div>
                            <div className="d-flex align-items-center text-white mb-3">
                                <div className="btn-sm-square bg-white text-primary rounded-circle me-3">
                                    <FontAwesomeIcon icon={faCheck} />
                                </div>
                                <span>Diam dolor diam ipsum et tempor sit</span>
                            </div>
                            <div className="d-flex align-items-center text-white mb-3">
                                <div className="btn-sm-square bg-white text-primary rounded-circle me-3">
                                    <FontAwesomeIcon icon={faCheck} />
                                </div>
                                <span>Diam dolor diam ipsum et tempor sit</span>
                            </div>
                            <div className="row g-4 pt-3">
                                <div className="col-sm-6">
                                    <div className="d-flex align-items-center rounded p-3" style={{ 'background': 'rgba(256, 256, 256, 0.1)' }}>
                                        <FontAwesomeIcon icon={faUsers} className="fa-3x text-white" />
                                        <div className="ms-3">
                                            <h2 className="text-white mb-0" data-toggle="counter-up">9999</h2>
                                            <p className="text-white mb-0">Happy Clients</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="d-flex align-items-center rounded p-3" style={{ 'background': 'rgba(256, 256, 256, 0.1)' }}>
                                        <FontAwesomeIcon icon={faCheck} className="fa-3x text-white" />
                                        <div className="ms-3">
                                            <h2 className="text-white mb-0" data-toggle="counter-up">9999</h2>
                                            <p className="text-white mb-0">Project Complete</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 align-self-end text-center text-md-end wow fadeIn" data-wow-delay="0.5s">
                            <img className="img-fluid" src="/feature.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Feature End --> */}


            {/* <!-- Case Start --> */}
            <div className="container-fluid bg-light py-5">
                <div className="container py-5">
                    <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{ 'maxWidth': '500px' }}>
                        <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">Case Study</div>
                        <h1 className="mb-4">Explore Our Recent AI Case Studies</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                            <div className="case-item position-relative overflow-hidden rounded mb-2">
                                <img className="img-fluid" src="/project-1.jpg" alt="" />
                                <a className="case-overlay text-decoration-none" href="">
                                    <small>Robotic Automation</small>
                                    <h5 className="lh-base text-white mb-3">Lorem elitr magna stet eirmod labore amet labore clita
                                    </h5>
                                    <span className="btn btn-square btn-primary">
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                            <div className="case-item position-relative overflow-hidden rounded mb-2">
                                <img className="img-fluid" src="/project-2.jpg" alt="" />
                                <a className="case-overlay text-decoration-none" href="">
                                    <small>Machine learning</small>
                                    <h5 className="lh-base text-white mb-3">Lorem elitr magna stet eirmod labore amet labore clita
                                    </h5>
                                    <span className="btn btn-square btn-primary">
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 wow fadeIn" data-wow-delay="0.7s">
                            <div className="case-item position-relative overflow-hidden rounded mb-2">
                                <img className="img-fluid" src="/project-3.jpg" alt="" />
                                <a className="case-overlay text-decoration-none" href="">
                                    <small>Predictive Analysis</small>
                                    <h5 className="lh-base text-white mb-3">Lorem elitr magna stet eirmod labore amet labore clita
                                    </h5>
                                    <span className="btn btn-square btn-primary">
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Case End --> */}


            {/* <!-- FAQs Start --> */}
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{ 'maxWidth': '500px' }}>
                        <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">Popular FAQs</div>
                        <h1 className="mb-4">Frequently Asked Questions</h1>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>How to build a website?</Accordion.Header>
                                    <Accordion.Body>
                                        Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>How long will it take to get a new website?</Accordion.Header>
                                    <Accordion.Body>
                                        Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>How to build a website?</Accordion.Header>
                                    <Accordion.Body>
                                        Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>How long will it take to get a new website?</Accordion.Header>
                                    <Accordion.Body>
                                        Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                        <div className="col-lg-6">
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Will you maintain my site for me?</Accordion.Header>
                                    <Accordion.Body>
                                        Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>I’m on a strict budget. Do you have any low cost options?</Accordion.Header>
                                    <Accordion.Body>
                                        Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Will you maintain my site for me?</Accordion.Header>
                                    <Accordion.Body>
                                        Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>I’m on a strict budget. Do you have any low cost options?</Accordion.Header>
                                    <Accordion.Body>
                                        Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- FAQs Start --> */}


            {/* <!-- Team Start --> */}
            <div className="container-fluid bg-light py-5">
                <div className="container py-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
                            <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">Our Team</div>
                            <h1 className="mb-4">Meet Our Experienced Team Members</h1>
                            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam
                                amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus
                                clita duo justo et tempor eirmod magna dolore erat amet</p>
                            <a className="btn btn-primary rounded-pill px-4" href="">Read More</a>
                        </div>
                        <div className="col-lg-7">
                            <div className="row g-4">
                                <div className="col-md-6">
                                    <div className="row g-4">
                                        <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
                                            <div className="team-item bg-white text-center rounded p-4 pt-0">
                                                <img className="img-fluid rounded-circle p-4" src="/team-1.jpg" alt="" />
                                                <h5 className="mb-0">Boris Johnson</h5>
                                                <small>Founder & CEO</small>
                                                <div className="d-flex justify-content-center mt-3">
                                                    <a className="btn btn-square btn-primary m-1" href="">
                                                        <FontAwesomeIcon icon={faFacebookF} />
                                                    </a>
                                                    <a className="btn btn-square btn-primary m-1" href="">
                                                        <FontAwesomeIcon icon={faTwitter} />
                                                    </a>
                                                    <a className="btn btn-square btn-primary m-1" href="">
                                                        <FontAwesomeIcon icon={faInstagram} />
                                                    </a>
                                                    <a className="btn btn-square btn-primary m-1" href="">
                                                        <FontAwesomeIcon icon={faLinkedinIn} />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                                            <div className="team-item bg-white text-center rounded p-4 pt-0">
                                                <img className="img-fluid rounded-circle p-4" src="/team-2.jpg" alt="" />
                                                <h5 className="mb-0">Adam Crew</h5>
                                                <small>Executive Manager</small>
                                                <div className="d-flex justify-content-center mt-3">
                                                    <a className="btn btn-square btn-primary m-1" href="">
                                                        <FontAwesomeIcon icon={faFacebookF} />
                                                    </a>
                                                    <a className="btn btn-square btn-primary m-1" href="">
                                                        <FontAwesomeIcon icon={faTwitter} />
                                                    </a>
                                                    <a className="btn btn-square btn-primary m-1" href="">
                                                        <FontAwesomeIcon icon={faInstagram} />
                                                    </a>
                                                    <a className="btn btn-square btn-primary m-1" href="">
                                                        <FontAwesomeIcon icon={faLinkedinIn} />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 pt-md-4">
                                    <div className="row g-4">
                                        <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                                            <div className="team-item bg-white text-center rounded p-4 pt-0">
                                                <img className="img-fluid rounded-circle p-4" src="/team-3.jpg" alt="" />
                                                <h5 className="mb-0">Kate Winslet</h5>
                                                <small>Co Founder</small>
                                                <div className="d-flex justify-content-center mt-3">
                                                    <a className="btn btn-square btn-primary m-1" href="">
                                                        <FontAwesomeIcon icon={faFacebookF} />
                                                    </a>
                                                    <a className="btn btn-square btn-primary m-1" href="">
                                                        <FontAwesomeIcon icon={faTwitter} />
                                                    </a>
                                                    <a className="btn btn-square btn-primary m-1" href="">
                                                        <FontAwesomeIcon icon={faInstagram} />
                                                    </a>
                                                    <a className="btn btn-square btn-primary m-1" href="">
                                                        <FontAwesomeIcon icon={faLinkedinIn} />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 wow fadeIn" data-wow-delay="0.7s">
                                            <div className="team-item bg-white text-center rounded p-4 pt-0">
                                                <img className="img-fluid rounded-circle p-4" src="/team-4.jpg" alt="" />
                                                <h5 className="mb-0">Cody Gardner</h5>
                                                <small>Project Manager</small>
                                                <div className="d-flex justify-content-center mt-3">
                                                    <a className="btn btn-square btn-primary m-1" href="">
                                                        <FontAwesomeIcon icon={faFacebookF} />
                                                    </a>
                                                    <a className="btn btn-square btn-primary m-1" href="">
                                                        <FontAwesomeIcon icon={faTwitter} />
                                                    </a>
                                                    <a className="btn btn-square btn-primary m-1" href="">
                                                        <FontAwesomeIcon icon={faInstagram} />
                                                    </a>
                                                    <a className="btn btn-square btn-primary m-1" href="">
                                                        <FontAwesomeIcon icon={faLinkedinIn} />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Team End --> */}

            {/* <!-- Testimonial Start --> */}
            <div className="container-xxl py-5">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
                            <div className="btn btn-sm border rounded-pill text-themeColor px-3 mb-3">Testimonial</div>
                            <h1 className="mb-4">What Say Our Clients!</h1>
                            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam
                                amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus
                                clita duo justo et tempor eirmod magna dolore erat amet</p>
                            <a className="btn btn-primary rounded-pill px-4" href="">Read More</a>
                        </div>
                        <div className="col-lg-7 wow fadeIn" style={{ 'height': '200px', 'overflow': 'hidden' }}>
                            <Swiper
                                direction={'vertical'}
                                navigation={{
                                    clickable: true,
                                }}
                                modules={[Navigation]}
                            >
                                <SwiperSlide>
                                    <div className="testimonial-item ps-5">
                                        <i className="fa fa-quote-left fa-2x text-themeColor mb-3"></i>
                                        <p className="fs-4">Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet</p>
                                        <div className="d-flex align-items-center">
                                            <img className="img-fluid flex-shrink-0 rounded-circle" src="/testimonial-1.jpg"
                                                style={{ 'width': '60px', 'height': '60px' }} />
                                            <div className="ps-3">
                                                <h5 className="mb-1">Client Name</h5>
                                                <span>Profession</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial-item ps-5">
                                        <i className="fa fa-quote-left fa-2x text-themeColor mb-3"></i>
                                        <p className="fs-4">Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet</p>
                                        <div className="d-flex align-items-center">
                                            <img className="img-fluid flex-shrink-0 rounded-circle" src="/testimonial-2.jpg"
                                                style={{ 'width': '60px', 'height': '60px' }} />
                                            <div className="ps-3">
                                                <h5 className="mb-1">Client Name</h5>
                                                <span>Profession</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial-item ps-5">
                                        <i className="fa fa-quote-left fa-2x text-themeColor mb-3"></i>
                                        <p className="fs-4">Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet</p>
                                        <div className="d-flex align-items-center">
                                            <img className="img-fluid flex-shrink-0 rounded-circle" src="/testimonial-3.jpg"
                                                style={{ 'width': '60px', 'height': '60px' }} />
                                            <div className="ps-3">
                                                <h5 className="mb-1">Client Name</h5>
                                                <span>Profession</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Testimonial End --> */}

        </>
    )
}

export default Home
