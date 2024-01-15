import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    return (
        <>


            {/* <!-- Navbar Start --> */}
            <div className="container-fluid">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-dark p-0">
                        <a href="index.html" className="navbar-brand">
                            <h1 className="text-white">AI<span className="text-dark">.</span>Tech</h1>
                        </a>
                        <button type="button" className="navbar-toggler ms-auto me-0" data-bs-toggle="collapse"
                            data-bs-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav ms-auto">
                                <a href="index.html" className="nav-item nav-link active">Home</a>
                                <a href="about.html" className="nav-item nav-link">About</a>
                                <a href="service.html" className="nav-item nav-link">Services</a>
                                <a href="project.html" className="nav-item nav-link">Projects</a>
                                <div className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                    <div className="dropdown-menu bg-light mt-2">
                                        <a href="feature.html" className="dropdown-item">Features</a>
                                        <a href="team.html" className="dropdown-item">Our Team</a>
                                        <a href="faq.html" className="dropdown-item">FAQs</a>
                                        <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                        <a href="404.html" className="dropdown-item">404 Page</a>
                                    </div>
                                </div>
                                <a href="contact.html" className="nav-item nav-link">Contact</a>
                            </div>
                            <button type="button" className="btn text-white p-0 d-none d-lg-block" data-bs-toggle="modal"
                                data-bs-target="#searchModal"><i className="fa fa-search"></i></button>
                        </div>
                    </nav>
                </div>
            </div>
            {/* <!-- Navbar End --> */}

        </>
    )
}

export default Header
