import React from "react";
import "./services.css"; // Corrected CSS import
export default function ElogBook() {
  return (
    <>
      <div className=" top_container m-5 ">
        <h1 className="heading">eLogBook</h1>
        <p className="top_paragraphs">
          Tired of illegible handwriting, lost logbooks, and the constant fear of ink smudging in the cleanroom? Then
          dive into the e-logbook revolution! This digital wonder is shaking up the pharma industry by transforming how
          you record and track crucial data.
        </p>

        <h4 className="why_line ">Imagine this:-</h4>
        <ul>
          <li>
            <b>No more paper mountains:</b>
            Ditch the bulky binders and scribbled sheets. e-Logbooks store everything electronically, saving space and
            making retrieval a breeze.
          </li>
          <li>
            <b>Goodbye, ink smudges:</b>
            Forget the worry of losing valuable data due to a rogue splash. e-Logbooks capture clear, tamper-proof
            entries, ensuring data integrity.
          </li>
          <li>
            <b> Compliance made easy:</b>
            Regulatory audits become a stress-free zone. Find any record instantly, demonstrate traceability
            effortlessly, and stay ahead of compliance requirements.
          </li>
          <li>
            <b> Collaboration gets a boost: </b>
            Share data seamlessly across teams and departments. Real-time updates keep everyone on the same page,
            boosting efficiency and communication.
          </li>
          <li>
            <b> Data analysis on steroids:</b>
            Gone are the days of manually sifting through logbooks. e-Logbooks allow for powerful data analysis, helping
            you identify trends, improve processes, and optimize production like never before.
          </li>
        </ul>

        <h6 className="middle_line">
          The bottom line: e-Logbooks aren't just about going digital; they're about unlocking a new level of data
          management, collaboration, and efficiency in the pharma industry. So, ditch the pen and paper and embrace the
          future of record-keeping. It's time to brew up a more efficient, compliant, and data-driven future for your
          pharma operations!
        </h6>

        <h5 className="ps_paragraph">
          P.S. Want to know more about the different e-Logbook options, their specific benefits for areas like R&D or
          manufacturing, and the implementation process? I'm your brewing buddy – Just Schedule a demo!
        </h5>
      </div>
    </>
  );
}
