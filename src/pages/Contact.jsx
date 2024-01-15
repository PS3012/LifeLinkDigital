import BreadCrumb from "../components/BreadCrumb"


function Contact() {
    return (
        <>

            <BreadCrumb page="Contact Us" />

            {/* <!-- Contact Start --> */}
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{ 'max-width': '500px' }}>
                        <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">Contact Us</div>
                        <h1 className="mb-4">If You Have Any Query, Please Contact Us</h1>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <p className="text-center mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, quisquam quam. Suscipit ipsa necessitatibus, fugiat quibusdam expedita labore ex molestiae in unde. Sapiente officia eius aliquid, quas beatae impedit neque totam expedita autem maxime deserunt, atque soluta commodi culpa. Quasi?
                            </p>
                            <div className="wow fadeIn" data-wow-delay="0.3s">
                                <form>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                                <label htmlFor="name">Your Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="email" className="form-control" id="email" placeholder="Your Email" />
                                                <label htmlFor="email">Your Email</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="subject" placeholder="Subject" />
                                                <label htmlFor="subject">Subject</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ 'height': '150px' }}></textarea>
                                                <label htmlFor="message">Message</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Contact End --> */}

        </>
    )
}

export default Contact
