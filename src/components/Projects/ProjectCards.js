import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img className={props.isTransparent ? "transparentProjectCardImg" : ""} variant="top" src={props.imgPath} alt="card-img" style={{ height: "25vh", objectFit: "contain" }} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify", whiteSpace: "pre-line" }}>
          {props.description}
        </Card.Text>
        {props.ghLink ? <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button> : null}
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {props.ghLink ? "Demo" : "Project Page"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
