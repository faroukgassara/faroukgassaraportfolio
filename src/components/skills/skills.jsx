import React from "react";
import "./skills.css";
import FrontEnd from "./frontend";
import Backend from "./backend";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section_title">Skills</h2>
      <span className="section_subtitle">My technical level</span>

      <div className="skills_container container grid">
        <FrontEnd />
        <Backend />
      </div>
    </section>
  );
};

export default Skills;
