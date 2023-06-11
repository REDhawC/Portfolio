import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I am <span className="purple">Hao Chen </span>
            from <span className="purple"> Shantou, China.</span>
            <br />
            <br />I am a junior pursuing <span className="purple">MSC in Business Analytics </span>
            in <span className="purple"> the University of Edinbough</span>
            , and I am passionate about using data to drive business decisions.
            <br />
            <br />In addition to my academic pursuits,
            I also have experience in <span className="purple">front-end</span> development and <span className="purple">coding</span>.
            I enjoy using my technical skills to create engaging and user-friendly websites and applications.
            <br />
            <br />My bachelor's degree in <span className="purple">Accounting</span> has also expanded my career path and given me
             a strong foundation in financial analysis and reporting.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(183, 157, 199)" }}>
            "Thank you for taking the time to visit my website
            , and I look forward to connecting with you further."{" "}
          </p>
          <footer className="blockquote-footer">Hao Chen</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
