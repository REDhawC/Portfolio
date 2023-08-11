import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/profile.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              <br />I am a junior pursuing <span className="purple">MSC in Business Analytics </span>
              in <span className="purple"> the University of Edinburgh</span>
              , and I am passionate about using data to drive business decisions.
              <br />
              <br />In addition to my academic pursuits,
              I also have experience in <span className="purple">front-end</span> development and <span className="purple">coding</span>.
              I enjoy using my technical skills to create engaging and user-friendly websites and applications.
              <br />
              <br />
              I am fluent in classics like
              <i>
                <b className="purple"> Javascript and Python. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new&nbsp;
              <i>
                <b className="purple">web applications </b>and
                areas related to{" "}
                <b className="purple">
                  Business Analytics.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              {" "}
              Modern Javascript Library and Frameworks like
              <i>
                <b className="purple"> React.js</b>
              </i>
              <br/>
              <br/>
              <p>
                I am characterized by <b className="purple">loyalty, flexibility, commitment, honesty, hard work, and adaptability</b>, and I approach work with great enthusiasm. I believe that by combining these strengths with my skills and knowledge, I can make a positive impact on your team. I am very excited about the opportunity to further discuss how I can contribute to your organization. Thank you!
              </p>
            </p>
          </Col>
          <Col md={4} className="myAvatar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/REDhawC"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/Hao-Chen-UK/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/Hao-Chen-UK/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
