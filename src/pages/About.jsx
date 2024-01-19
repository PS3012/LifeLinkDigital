import BreadCrumb from "../components/BreadCrumb"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faUsers } from "@fortawesome/free-solid-svg-icons"
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons"

function About() {
    return (
        <>

            <BreadCrumb page="About Us" />

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

        </>
    )
}

export default About
