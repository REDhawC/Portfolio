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
];

function Toolstack() {
  return (
    <>
      {/* 🚀 核心黑魔法：定义全局的 SVG 动态流光引擎 */}
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <linearGradient id="forest-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            {/* 这里的 animate 负责让颜色来回切换，模拟流光效果 */}
            <stop offset="0%" stopColor="#11998e">
              <animate attributeName="stop-color" values="#11998e;#38ef7d;#11998e" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="50%" stopColor="#15b93e">
              <animate attributeName="stop-color" values="#15b93e;#a8ff78;#15b93e" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#38ef7d">
              <animate attributeName="stop-color" values="#38ef7d;#11998e;#38ef7d" dur="3s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
          <linearGradient id="starry-purple-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            {/* 霓虹深紫 -> 幽暗星空蓝 -> 霓虹深紫 */}
            <stop offset="0%" stopColor="#b224ef">
              <animate attributeName="stop-color" values="#b224ef;#7579ff;#b224ef" dur="3s" repeatCount="indefinite" />
            </stop>
            {/* 幽暗星空蓝 -> 恒星粉 -> 幽暗星空蓝 */}
            <stop offset="50%" stopColor="#7579ff">
              <animate attributeName="stop-color" values="#7579ff;#ffb199;#7579ff" dur="3s" repeatCount="indefinite" />
            </stop>
            {/* 恒星粉 -> 星光白 -> 恒星粉 */}
            <stop offset="100%" stopColor="#ffb199">
              <animate attributeName="stop-color" values="#ffb199;#e0c3fc;#ffb199" dur="3s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
        </defs>
      </svg>

      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {toolStackList.map(({ Icon, label }) => (
          <Col xs={4} md={2} className="tech-icons" key={label}>
            <div className="tech-icon-wrapper">
              {/* 给 Icon 加上一个专属 class，方便等下用 CSS 捕捉它 */}
              <Icon className="animated-svg-icon" />
              <span className="tech-icon-label">{label}</span>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Toolstack;

// import React from "react";
// import { Col, Row } from "react-bootstrap";
// import {
//   SiLinux,
//   SiVisualstudiocode,
//   SiPostman,
//   SiHeroku,
//   SiVercel,
//   SiTableau,
//   SiPowerbi,
//   SiMicrosoftexcel,
//   SiDocker,
//   SiFigma,
// } from "react-icons/si";

// const toolStackList = [
//   { Icon: SiPowerbi, label: "Power BI" },
//   { Icon: SiVisualstudiocode, label: "VS Code" },
//   { Icon: SiPostman, label: "Postman" },
//   { Icon: SiTableau, label: "Tableau" },
//   { Icon: SiMicrosoftexcel, label: "Excel" },
//   { Icon: SiDocker, label: "Docker" },
//   { Icon: SiLinux, label: "Linux" },
//   { Icon: SiFigma, label: "Figma" },
//   // { Icon: SiHeroku, label: "Heroku" },
//   // { Icon: SiVercel, label: "Vercel" },
// ];
// function Toolstack() {
//   return (
//     <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
//       {toolStackList.map(({ Icon, label }) => (
//         <Col xs={4} md={2} className="tech-icons" key={label}>
//           <div className="tech-icon-wrapper">
//             <Icon />
//             <span className="tech-icon-label">{label}</span>
//           </div>
//         </Col>
//       ))}
//     </Row>
//   );
// }

// export default Toolstack;