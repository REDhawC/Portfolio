import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiTableau,
  SiPowerbi,
  SiMicrosoftexcel,
  SiDocker,
  SiFigma,
} from "react-icons/si";

const toolStackList = [
  { Icon: SiPowerbi, label: "Power BI" },
  { Icon: SiVisualstudiocode, label: "VS Code" },
  { Icon: SiPostman, label: "Postman" },
  { Icon: SiTableau, label: "Tableau" },
  { Icon: SiMicrosoftexcel, label: "Excel" },
  { Icon: SiDocker, label: "Docker" },
  { Icon: SiLinux, label: "Linux" },
  { Icon: SiFigma, label: "Figma" },
  // { Icon: SiHeroku, label: "Heroku" },
  // { Icon: SiVercel, label: "Vercel" },
];
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {toolStackList.map(({ Icon, label }) => (
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

export default Toolstack;