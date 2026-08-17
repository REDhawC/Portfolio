import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/profile.png";
import myImgBack from "../../Assets/profile_back.png";
import petabitLogo from "../../Assets/petabit_logo.svg";
import uoeLogo from "../../Assets/uoe_logo.png";
import njauLogo from "../../Assets/njau_logo.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Techstack from "../About/Techstack";
import Toolstack from "../About/Toolstack";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { HashLink } from "react-router-hash-link";


function Home2() {

  const ColWidth = [4, 4, 2, 2]; // 定义每列的宽度

  // 3. 定义一个状态，记录当前是否处于翻转状态，默认是 false (正面)
  const [isFlipped, setIsFlipped] = useState(false);

  // 4. 点击事件：每次点击切换翻转状态
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <h1 style={{ fontSize: "2.6em" }}>
          LET ME <span className="purple"> INTRODUCE </span> MYSELF
        </h1>
        <Row>
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
          <Col md={12} className="home-about-description">
            <br />
            <br />
            <Container style={{ fontSize: "1.2em" }}>
              <Row>
                <Col md={ColWidth[0]}>
                  2026.04 ~ PRESENT
                </Col>
                <Col md={ColWidth[1]}>
                  <span className="purple">IT Engineer</span>, <br />Patabit.co ltd, Kobe, Japan
                </Col>
                <Col md={ColWidth[2]}>
                  <a className="resume-org-icon" href="https://www.petabit.co.jp/" target="_blank" rel="noreferrer">
                    <img src={petabitLogo} className="img-fluid" alt="icon-petabit" />
                  </a>
                </Col>
                <Col md={ColWidth[3]}>
                  <Button
                    variant="primary"
                    href="/project"
                  >
                    {"Related Projects"}
                  </Button>
                </Col>
              </Row>
              <br />
              <Row>
                <Col md={ColWidth[0]}>
                  2023.09 ~ 2024.12
                </Col>
                <Col md={ColWidth[1]}>
                  MSc in <span className="purple">Business Analytics</span>, <br />University of Edinburgh, UK
                </Col>
                <Col md={ColWidth[2]}>
                  <a className="resume-org-icon uoe-icon" href="https://www.business-school.ed.ac.uk/msc/business-analytics" target="_blank" rel="noreferrer">
                    <img src={uoeLogo} className="img-fluid" alt="icon-edinburgh" />
                  </a>

                </Col>
                <Col md={ColWidth[3]}>
                  <Button as={HashLink} smooth to="/project#undergrad-projects" variant="primary">
                    {"Related Projects"}
                  </Button>
                </Col>
              </Row>
              <br />
              <Row>
                <Col md={ColWidth[0]}>
                  2019.09 ~ 2023.06
                </Col>
                <Col md={ColWidth[1]}>
                  BM in <span className="purple">Accounting</span>, <br />Nanjing Agricultural University, China
                </Col>
                <Col md={ColWidth[2]}>
                  <a className="resume-org-icon njau-icon" href="https://rsrcw.njau.edu.cn/en/index.htm" target="_blank" rel="noreferrer">
                    <img src={njauLogo} className="img-fluid" alt="icon-njau" />
                  </a>
                </Col>
                <Col md={ColWidth[3]}>
                  <Button as={HashLink} smooth to="/project#undergrad-projects" variant="primary">
                    {"Related Projects"}
                  </Button>
                </Col>
              </Row>
            </Container>
            <Col md={12}>
              <p className="home-about-body">
                I'm originally from <span className="purple">Shantou, China</span>
                , and currently based in <span className="purple">Kobe, Japan</span>,
                working as a Frontend Developer while building toward roles that bridge business and technology.
                <br />
                <br />
                My background sits at the intersection of the two — an <span className="purple">accounting</span> degree gave me a foundation in financial analysis,
                and my <span className="purple">MSc in Business Analytics</span> pushed me toward data-driven problem solving,
                which eventually led me into frontend development and coding.
                <br />
                <br />
                I'm native in <span className="purple">Mandarin Chinese</span>, almost native in <span className="purple">English (IELTS 7.5)</span> and fluent in <span className="purple">Japanese (JLPT N2, aiming for N1)</span>,
                and I enjoy operating across languages and disciplines just as much as across the stack.
              </p>
            </Col>

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
