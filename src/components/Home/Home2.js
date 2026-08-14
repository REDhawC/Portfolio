import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/profile.png";
import myImgBack from "../../Assets/profile_back.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Techstack from "../About/Techstack";
import Toolstack from "../About/Toolstack";

function Home2() {

  // 3. 定义一个状态，记录当前是否处于翻转状态，默认是 false (正面)
  const [isFlipped, setIsFlipped] = useState(false);

  // 4. 点击事件：每次点击切换翻转状态
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <br />
            <br />
            <Container style={{ fontSize: "1.2em" }}>
              <Row>
                <Col md={6}>
                  2026.04 ~ PRESENT
                </Col>
                <Col md={4}>
                  <span className="purple">IT Engineer</span>, Patabit.co ltd, Kobe, Japan
                </Col>
              </Row>
              <br />
              <Row>
                <Col md={6}>
                  2023.09 ~ 2024.12
                </Col>
                <Col md={4}>
                  MSc in <span className="purple">Business Analytics</span>, University of Edinburgh, UK
                </Col>
              </Row>
              <br />
              <Row>
                <Col md={6}>
                  2019.09 ~ 2023.06
                </Col>
                <Col md={4}>
                  BM in <span className="purple">Accounting</span>, Nanjing Agricultural University, China
                </Col>
              </Row>
            </Container>

            <p className="home-about-body">
              I graduated with a <span className="purple">MSC in Business Analytics </span>
              in <span className="purple"> the University of Edinburgh</span>
              , and I am passionate about using data to drive business decisions and creating engaging and user-friendly websites and applications.
              <br />
              <br />
              I am fluent in classics like
              <i>
                <b className="purple"> Javascript and Python. </b>
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
              <br />
              <br />
              <p>
                I am characterized by <b className="purple">loyalty, flexibility, commitment, honesty, hard work, and adaptability</b>, and I approach work with great enthusiasm. I believe that by combining these strengths with my skills and knowledge, I can make a positive impact on your team. I am very excited about the opportunity to further discuss how I can contribute to your organization. Thank you!
              </p>
            </p>
          </Col>
          <Col md={4} className="myAvatar">
            <Tilt>
              {/* 5. 这里的 onClick 接管点击事件，控制翻转 */}
              <div
                className="photo-flip-container"
                onClick={handleFlip}
              >
                {/* 动态添加 class：如果 isFlipped 为 true，就加上 'is-flipped' */}
                <div className={`photo-flipper ${isFlipped ? "is-flipped" : ""}`}>

                  {/* 正面 */}
                  <div className="photo-face photo-front">
                    <img src={myImg} className="img-fluid" alt="avatar front" />
                  </div>

                  {/* 背面 */}
                  <div className="photo-face photo-back">
                    <img src={myImgBack} className="img-fluid" alt="avatar back" />
                  </div>
                </div>
              </div>
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Container className="about-section">
            <Row>
              <h1 className="project-heading">
                Professional <strong className="purple">Skillset </strong>
              </h1>

              <Techstack className="" />

              <h1 className="project-heading">
                <strong className="purple">Tools</strong> I use
              </h1>
              <Toolstack />
            </Row>
          </Container>
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
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>


  );
}
export default Home2;
