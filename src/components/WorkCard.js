import React from "react";
import "./WorkCard.css";
export default function WorkCard(props) {
  return (
    <div className="project-card">
      <img src={props.imagesSrc} alt="Images" />
      <h2 className="project-title">{props.title}</h2>
      <div className="project-details">
        <p>{props.description}</p>
        <div className="project-btn">
          <a href={props.view} className="btn">
            View
          </a>
        </div>
      </div>
    </div>
  );
}
