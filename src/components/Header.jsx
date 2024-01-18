import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, NavLink } from 'react-router-dom';

function Header() {
    return (
        <>


            {/* <!-- Navbar Start --> */}
            <div className="container-fluid">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-dark p-0">
                        <Link to="/" className="navbar-brand">
                            <h1 className="text-white">AI<span className="text-dark">.</span>Tech</h1>
                        </Link>
                        <button type="button" className="navbar-toggler ms-auto me-0" data-bs-toggle="collapse"
                            data-bs-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav ms-auto">
                                <NavLink to="/" className="nav-item nav-link">Home</NavLink>
                                <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                                <NavLink to="/services" className="nav-item nav-link">Services</NavLink>
                                <NavLink to="/features" className="nav-item nav-link">Features</NavLink>
                                <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>
                                {/* <div className="nav-item dropdown">
                                    <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                                        Pages
                                    </Link>
                                    <div className="dropdown-menu bg-light mt-2">
                                        <Link to="/feature" className="dropdown-item">Features</Link>
                                        <Link to="/team" className="dropdown-item">Our Team</Link>
                                        <Link to="/faq" className="dropdown-item">FAQs</Link>
                                        <Link to="/testimonial" className="dropdown-item">Testimonial</Link>
                                        <Link to="/404" className="dropdown-item">404 Page</Link>
                                    </div>
                                </div> */}
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
