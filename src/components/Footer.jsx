import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faAngleRight, faEnvelopeOpenText, faPhone, faSignsPost } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

function Footer() {
    return (
        <>

            {/* <!-- Newsletter Start --> */}
            <div className="container-fluid bg-themeColor newsletter py-5">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-md-5 ps-lg-0 pt-5 pt-md-0 text-start wow fadeIn" data-wow-delay="0.3s">
                            <img className="img-fluid" src="/newsletter.png" alt="" />
                        </div>
                        <div className="col-md-7 py-5 newsletter-text wow fadeIn" data-wow-delay="0.5s">
                            <div className="btn btn-sm border rounded-pill text-white px-3 mb-3">Newsletter</div>
                            <h1 className="text-white mb-4">Let&lsquo;s subscribe the newsletter</h1>
                            <div className="position-relative w-100 mt-3 mb-2">
                                <input className="form-control border-0 rounded-pill w-100 ps-4 pe-5" type="text"
                                    placeholder="Enter Your Email" style={{ 'height': '48px' }} />
                                <button type="button" className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"><i
                                    className="fa fa-paper-plane text-primary fs-4"></i></button>
                            </div>
                            <small className="text-white-50">Diam sed sed dolor stet amet eirmod</small>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Newsletter End --> */}

            {/* <!-- Footer Start --> */}
            <div className="container-fluid bg-dark text-white-50 footer pt-5">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
                            <a href="index.html" className="d-inline-block mb-3">
                                <h1 className="text-white">AI<span className="text-primary">.</span>Tech</h1>
                            </a>
                            <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam
                                amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus
                                clita duo justo et tempor</p>
                        </div>
                        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
                            <h5 className="text-white mb-4">Get In Touch</h5>
                            <p>
                                <FontAwesomeIcon icon={faSignsPost} className="me-3" />
                                123 Street, New York, USA
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faPhone} className="me-3" />
                                +012 345 67890
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faEnvelopeOpenText} className="me-3" />
                                info@example.com
                            </p>
                            <div className="d-flex pt-2">
                                <a className="btn btn-outline-light btn-social" href="">
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </a>
                                <a className="btn btn-outline-light btn-social" href="">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                                <a className="btn btn-outline-light btn-social" href="">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                                <a className="btn btn-outline-light btn-social" href="">
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
                            <h5 className="text-white mb-4">Popular Link</h5>
                            <Link className="btn btn-link" to="/about">
                                <FontAwesomeIcon icon={faAngleRight} />About Us
                            </Link>
                            <Link className="btn btn-link" to="/contact">
                                <FontAwesomeIcon icon={faAngleRight} />Contact Us
                            </Link>
                            <Link className="btn btn-link" to="/privacy-policy">
                                <FontAwesomeIcon icon={faAngleRight} />Privacy Policy
                            </Link>
                            <Link className="btn btn-link" to="/terms-condition">
                                <FontAwesomeIcon icon={faAngleRight} />Terms & Condition
                            </Link>
                        </div>
                        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
                            <h5 className="text-white mb-4">Our Services</h5>
                            <Link className="btn btn-link" to="">
                                <FontAwesomeIcon icon={faAngleRight} />Robotic Automation
                            </Link>
                            <Link className="btn btn-link" to="">
                                <FontAwesomeIcon icon={faAngleRight} />Machine learning
                            </Link>
                            <Link className="btn btn-link" to="">
                                <FontAwesomeIcon icon={faAngleRight} />Predictive Analysis
                            </Link>
                            <Link className="btn btn-link" to="">
                                <FontAwesomeIcon icon={faAngleRight} />Data Science
                            </Link>
                            <Link className="btn btn-link" to="">
                                <FontAwesomeIcon icon={faAngleRight} />Robot Technology
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="container wow fadeIn" data-wow-delay="0.1s">
                    <div className="copyright">
                        <div className="row">
                            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                &copy; Life Link Digital, All Right Reserved.
                            </div>
                            <div className="col-md-6 text-center text-md-end">
                                <div className="footer-menu">
                                    <a href="">Home</a>
                                    <a href="">Cookies</a>
                                    <a href="">Help</a>
                                    <a href="">FAQs</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Footer End --> */}

        </>
    )
}

export default Footer
