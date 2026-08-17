import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/redbookProj.png";
import chatify from "../../Assets/Projects/financialDashboard.png";
import bitsOfCode from "../../Assets/Projects/messengerProj.png";
import drinkmateLogo from "../../Assets/Projects/drinkmate-logo.png";
import petabitLogo from "../../Assets/petabit_logo.svg";
import ecd2Logo from "../../Assets/Projects/logo_ecdirect.svg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Recent</strong> Works in
          <a className="resume-org-icon" href="https://www.petabit.co.jp/" target="_blank" rel="noreferrer">
            <img src={petabitLogo} className="img-fluid" alt="icon-petabit" />
          </a>
        </h1>
        <p>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              isTransparent={true}
              imgPath={ecd2Logo}
              isBlog={false}
              title="ECDIRECT2 | Feature Improvements"
              description={
                "Led character limit validation changes for custom parts labels, including identifying and fixing resulting PHPUnit test failures; owned the process from merge through release notes.\n\nImplemented a recipe-listing landing page: rebuilt a static HTML/CSS reproduction of a reference site into reusable Vue components, enabling non-engineers to customize images and text"
              }
              demoLink="http://ecdirect2.petabit.co.jp/"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              isTransparent={true}
              imgPath={drinkmateLogo}
              isBlog={false}
              title="DrinkMate | Landing Page Development"
              description="Coded ABOUT and HOWTO pages; diagnosed and fixed a CSS animation bug during hover effect implementation."
              demoLink="https://www.drinkmate.jp/how-to.php"
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Undergrad and Postgrad</strong> Projects
        </h1>
        <p>
          These are some of my side projects from both undergraduate and graduate studies.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Financial Information Visualization Dashboard Web app"
              description="Used Python (plotly, sklearn, Numpy, Pandas) to create a website analytics dashboard REDHAWC for selected listed companies."
              ghLink="https://github.com/REDhawC/financial-dashboard"
              demoLink="https://redhawc-fd.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Red-Messenger"
              description="Red-Messenger is a cutting-edge real-time chat application designed to connect users seamlessly and securely. With its intuitive interface and advanced features, Red-Messenger offers a dynamic and engaging communication experience."
              ghLink="https://github.com/REDhawC/red-messenger"
              demoLink="https://red-messenger.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="RedBook"
              description="Welcome to RedBook, a vibrant and engaging photo-sharing social media platform that connects people from all walks of life. Designed with a sleek and modern interface, RedBook offers a seamless user experience that will keep you entertained and connected."
              ghLink="https://github.com/REDhawC/redbook"
              demoLink="https://redbook-hao-chen.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
