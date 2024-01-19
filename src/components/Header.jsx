import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, NavLink } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

function Header() {
    const sidebarRef = useRef();
    const [service, setService] = useState(false);
    const [sidebar, setSideBar] = useState(false);

    const handleOutSideClick = (e) => {
        if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
            setSideBar(false);
        }
    }

    // const handleSidebarScroll = () => {
    //     setSideBar(false);
    // }


    useEffect(() => {
        document.addEventListener('mousedown', handleOutSideClick);
        // window.addEventListener('scroll', handleSidebarScroll);
        return () => {
            document.addEventListener('mousedown', handleOutSideClick);
            // window.addEventListener('scroll', handleSidebarScroll);
        }
    }, []);


    return (
        <>
            {/* <!-- Navbar Start --> */}
            <div className="container-fluid">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-dark p-0 py-5">
                        <Link to="/" className="navbar-brand">
                            {/* <h1 className="text-white">AI<span className="text-dark">.</span>Tech</h1> */}
                            <img style={{ height: '50px', width: '150px' }} src="Life Link Digital White Small.png" alt="Life Link Digital" />
                        </Link>
                        <button type="button" className="navbar-toggler ms-auto me-0" data-bs-toggle="collapse"
                            data-bs-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav ms-auto">
                                {sidebar ? '' : (
                                    <div onClick={() => setSideBar(!sidebar)} className="toggleSidebar btn btn-primary cursor-pointer">
                                        <svg width="24" height="24" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                            <path fill="#fff" fillRule="evenodd" d="M2 1L1 2v12l1 1h12l1-1V2l-1-1zm0 13V2h7v12z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                            <button type="button" className="btn text-white p-0 d-none d-lg-block" data-bs-toggle="modal"
                                data-bs-target="#searchModal"><i className="fa fa-search"></i></button>
                        </div>
                    </nav>
                </div>
                <div className={`sidebar  px-4 py-3 d-none d-lg-block`} style={sidebar ? { 'transform': 'translate(0, 0)' } : {}} ref={sidebarRef}>
                    <div className="sidebar_top ms-auto ">
                        <div onClick={() => setSideBar(false)} className="cross_icon cursor-pointer btn btn-light cursor-pointer  ">
                            <svg width="24" height="24" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#fff" fillRule="evenodd" d="M14.5 3.75a.75.75 0 0 1 1.5 0v8.5a.75.75 0 0 1-1.5 0zm-6.341.47a.75.75 0 0 0 0 1.06l1.97 1.97H.75a.75.75 0 0 0 0 1.5h9.379l-1.97 1.97a.75.75 0 1 0 1.06 1.06l3.25-3.25L13 8l-.53-.53l-3.25-3.25a.75.75 0 0 0-1.061 0" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                    <div className="sidebar_bottom">
                        <div className="nav_links">
                            <NavLink to="/" className="nav-item nav-link">Home</NavLink>
                        </div>
                        <div className="nav_links">
                            <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                        </div>
                        <div onClick={() => setService(!service)} className="nav_links">
                            <NavLink to="#" className="nav-item nav-link">Services</NavLink>
                            {service ? (
                                <div className="arrowIconDown">
                                    <svg width="24" height="24" viewBox="0 0 16 7" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="#fff" d="M8 6.5a.47.47 0 0 1-.35-.15l-4.5-4.5c-.2-.2-.2-.51 0-.71c.2-.2.51-.2.71 0l4.15 4.15l4.14-4.14c.2-.2.51-.2.71 0c.2.2.2.51 0 .71l-4.5 4.5c-.1.1-.23.15-.35.15Z" />
                                    </svg>
                                </div>
                            ) : (
                                <div className="arrowIconRight">
                                    <svg width="24" height="24" viewBox="0 0 7 16" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="#fff" d="M1.5 13a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71L5.3 7.99L1.15 3.85c-.2-.2-.2-.51 0-.71c.2-.2.51-.2.71 0l4.49 4.51c.2.2.2.51 0 .71l-4.5 4.49c-.1.1-.23.15-.35.15" />
                                    </svg>
                                </div>
                            )}
                        </div>
                        {service ? (
                            <div className='service_container' >
                                <div className="service_links">
                                    <NavLink to="/software-development" className="nav-item nav-link">Software Developement</NavLink>
                                </div>
                                <div className="service_links">
                                    <NavLink to="/services" className="nav-item nav-link">Website Developement</NavLink>
                                </div>
                                <div className="service_links">
                                    <NavLink to="/services" className="nav-item nav-link">SME Guidence</NavLink>
                                </div>
                                <div className="service_links">
                                    <NavLink to="/services" className="nav-item nav-link">Pharma Digitization</NavLink>
                                </div>
                                <div className="service_links">
                                    <NavLink to="/services" className="nav-item nav-link">HealthCare Digitization</NavLink>
                                </div>
                                <div className="service_links">
                                    <NavLink to="/services" className="nav-item nav-link">Hospital Management</NavLink>
                                </div>
                                <div className="service_links">
                                    <NavLink to="/services" className="nav-item nav-link">School/College Management</NavLink>
                                </div>
                                <div className="service_links">
                                    <NavLink to="/services" className="nav-item nav-link">Computer Validation...</NavLink>
                                </div>
                                <div className="service_links">
                                    <NavLink to="/services" className="nav-item nav-link">Quality Risk Management</NavLink>
                                </div>
                                <div className="service_links">
                                    <NavLink to="/services" className="nav-item nav-link">SDLC Management</NavLink>
                                </div>
                                <div className="service_links">
                                    <NavLink to="/services" className="nav-item nav-link">GXP Audit ...</NavLink>
                                </div>
                            </div>
                        ) : ''}
                        <div className="nav_links">
                            <NavLink to="/features" className="nav-item nav-link">Features</NavLink>
                        </div>
                        <div className="nav_links">
                            <NavLink to="/contact" className="nav-item nav-link">Contacts</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Navbar End --> */}

        </>
    )
}

export default Header
