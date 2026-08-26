import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiHtml5,
  DiCss3,
  DiMysql,
  DiPython,
  DiGit,
  DiPhp,
} from "react-icons/di";
import { SiVuedotjs, SiNuxtdotjs } from "react-icons/si";

// 图标与名称绑定，统一维护
const techStackList = [
  { Icon: DiJavascript1, label: "JavaScript" },
  { Icon: DiPhp, label: "PHP" },
  { Icon: SiNuxtdotjs, label: "Nuxt.js" },
  { Icon: SiVuedotjs, label: "Vue.js" },
  { Icon: DiNodejs, label: "Node.js" },
  { Icon: DiReact, label: "React" },
  { Icon: DiMysql, label: "MySQL" },
  { Icon: DiGit, label: "Git" },
  { Icon: DiHtml5, label: "HTML5" },
  { Icon: DiPython, label: "Python" },
  { Icon: DiCss3, label: "CSS3" },
];

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techStackList.map(({ Icon, label }) => (
        <Col xs={4} md={2} className="tech-icons" key={label}>
          <div className="tech-icon-wrapper">
            <Icon />
            <span className="tech-icon-label">{label}</span>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;