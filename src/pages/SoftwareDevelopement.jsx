import { useState } from "react";

function SoftwareDevelopement() {
    const [card, setCard] = useState("Software Development");
    return (
        <>
            {/* software n development section start */}
            <div className="container-fluid pt-5 bg-themeColor hero-header ">
                <div className="container pt-5">
                    <div className="row g-5 pt-5">
                        <div className="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
                            <h4 className="display-6 text-white mb-4 animated slideInRight">Software Design / Development</h4>
                            <p className="text-white mb-4 animated slideInRight">Elevate your digital presence with our expert software development and design services. We blend innovation, precision, and creativity to deliver tailored solutions for your unique needs.</p>
                            <a href="" className="btn btn-outline-light py-sm-3 px-sm-5 rounded-pill animated slideInRight">Get in Touch</a>
                        </div>
                        <div className="col-lg-6 align-self-end text-center text-lg-end">
                            <img className="img-fluid" src="/hero-img.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* software n development section end */}

            {/* section two  start */}
            <div className="conatainer position-relative pt-5 bg-dark" style={{ backgroundImage: 'url("./texture.png")' }}>
                <div className="row g-5 pt-5">
                    <div className="col-lg-6 align-items-center text-left text-lg-left mb-lg-5 ps-5">
                        <h4 className="display-5 text-light mb-4 animated slideInRight">Navigating Success: A Comprehensive Guide to Software Project Lifecycle Excellence</h4>
                    </div>
                    <div className="col-lg-6 align-self-start text-start text-lg-start mb-lg-5 px-5">
                        <p className="fs-4 text-white mb-4 animated slideInRight">Embark on a journey through the Software Project Lifecycle with our comprehensive guide. Explore the intricacies of planning, development, testing, deployment, and maintenance. Our attentive approach ensures a seamless and successful project, aligning with industry best practices and innovation. Navigate each phase with confidence, unlocking the full potential of your software endeavors.</p>
                    </div>
                </div>
            </div>
            {/* section two  end */}

            {/* section three dynamic data show start */}
            <div className="container-fluid py-5 bg-light">{/* style={{backgroundImage:'url("./shapes-lines-only.svg")',backgroundRepeat:'no-repeat'}} */}
                <div className="container pt-5" >
                    <div className="row g-5">
                        <div className="col-lg-6 align-items-center text-start text-lg-start mb-lg-5">
                            <div onClick={() => setCard("Software Development")} className={`row mb-2   p-4 rounded-end ${card === "Software Development" ? 'border-start border-4 border-primary shadow-lg ' : 'shadow-lg'} `}>
                                <h6 className="">Software Development</h6>
                            </div>
                            <div onClick={() => setCard("Website Development")} className={`row mb-2   p-4 rounded-end ${card === "Website Development" ? 'border-start border-4 border-primary shadow-lg' : 'shadow-lg'} `}>
                                <h6 className="">Website Development</h6>
                            </div>
                            <div onClick={() => setCard("Custom Software")} className={`row mb-2   p-4 rounded-end ${card === "Custom Software" ? 'border-start border-4 border-primary shadow-lg' : 'shadow-lg'} `}>
                                <h6 className="">Custom Software</h6>
                            </div>
                        </div>
                        <div className="col-lg-6 align-items-center text-center text-lg-center mb-lg-5">
                            {card === "Software Development" ? (
                                <div className="rounded p-5 shadow-lg">
                                    <h4 className="text-dark mb-4 animated text-start slideInRight">Software Development is the systematic process of creating and maintaining applications, involving design, programming, testing, and bug fixing.</h4>
                                    <ul>
                                        <li>Thoroughly understand requirements and plan the software&#39;s architecture and functionalities.</li>
                                        <li>Write code using programming languages such as Java, Python, or JavaScript to implement the planned features.</li>
                                        <li>Conduct comprehensive testing, including unit testing, integration testing, and user acceptance testing, to ensure the software&#39;s reliability.</li>
                                        <li>Create detailed documentation, including user manuals and technical documentation, to aid future maintenance and understanding.</li>
                                        <li>Implement the software in the production environment, making it accessible to end-users.</li>
                                        <li>Address bugs, enhance features, and adapt to changing requirements over time.</li>
                                    </ul>
                                </div>
                            ) : ''}
                            {card === "Website Development" ? (
                                <div className="rounded p-5 shadow-lg">
                                    <h4 className="text-dark mb-4 animated slideInRight">Website Development is the systematic process of creating, designing, and maintaining websites. It includes tasks such as web design, coding, content creation, and ongoing updates.</h4>
                                    <ul>
                                        <li>Define the website&#39;s purpose, structure, and design for optimal user experience.</li>
                                        <li>Implement the design using HTML, CSS, JavaScript, and other relevant technologies.</li>
                                        <li>Add text, images, videos, and other media to enhance the website&#39;s content.</li>
                                        <li>Conduct thorough testing to ensure the website functions correctly and is compatible across browsers and devices.</li>
                                        <li>Make the website accessible to the public by deploying it on a hosting platform.</li>
                                        <li> Regularly update content, address issues, and make improvements to keep the website relevant and secure.</li>
                                    </ul>
                                </div>
                            ) : ''}
                            {card === "Custom Software" ? (
                                <div className="rounded p-5 shadow-lg">
                                    <h4 className="text-dark mb-4 animated slideInRight">Custom Software refers to bespoke applications tailored to meet specific business needs. It involves the design, development, and implementation of unique software solutions.</h4>
                                    <ul>
                                        <li> In-depth understanding of business processes to identify specific software needs.</li>
                                        <li>Creation of a tailored software architecture and user interface to meet unique requirements.</li>
                                        <li>Writing custom code using programming languages and frameworks suited to the project.</li>
                                        <li> Rigorous testing to ensure the software performs as intended and is free of bugs.</li>
                                        <li>Implementation of the custom software in the client&#39;s environment.</li>
                                        <li>Ongoing support, bug fixing, and updates to adapt to changing needs.</li>
                                    </ul>
                                </div>
                            ) : ''}
                        </div>
                    </div>
                </div>
            </div>
            {/* section three dynamic data show end */}
            {/* blue section bg card start */}
            <div className="container-fluid p-5 bg-themeColor">
                <div className="container">
                    <h4 className="display-6 text-center text-white">Your leverage – Our delivery experience across critical analytic dimensions</h4>
                    <div className="row pt-5 g-5">
                        <div className="col-4">
                            <div className="card text-center mb-3 py-5 px-5">
                                <div className="card-body">
                                    <h5 className="card-title">Saved business users’ time and improved meeting note quality</h5>
                                    <p className="card-text">Developed a BART-powered summary system to extract meaningful insights from long meeting transcripts.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card text-center py-5 px-5">
                                <div className="card-body">
                                    <h5 className="card-title">Saved business users’ time and improved meeting note quality</h5>
                                    <p className="card-text">Developed a BART-powered summary system to extract meaningful insights from long meeting transcripts.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card text-center py-5 px-5">
                                <div className="card-body">
                                    <h5 className="card-title">Saved business users’ time and improved meeting note quality</h5>
                                    <p className="card-text">Developed a BART-powered summary system to extract meaningful insights from long meeting transcripts.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-5 g-5">
                        <div className="col-4">
                            <div className="card text-center mb-3 py-5 px-5">
                                <div className="card-body">
                                    <h5 className="card-title">Saved business users’ time and improved meeting note quality</h5>
                                    <p className="card-text">Developed a BART-powered summary system to extract meaningful insights from long meeting transcripts.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card text-center py-5 px-5">
                                <div className="card-body">
                                    <h5 className="card-title">Saved business users’ time and improved meeting note quality</h5>
                                    <p className="card-text">Developed a BART-powered summary system to extract meaningful insights from long meeting transcripts.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card text-center py-5 px-5">
                                <div className="card-body">
                                    <h5 className="card-title">Saved business users’ time and improved meeting note quality</h5>
                                    <p className="card-text">Developed a BART-powered summary system to extract meaningful insights from long meeting transcripts.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* blue section bg card end */}
        </>
    )
}

export default SoftwareDevelopement