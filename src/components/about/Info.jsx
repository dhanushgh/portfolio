import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="bx bx-award about__icon"></i>

        <h3 className="about__title">Passionate</h3>
        <span className="about__subtitle">About Web Development</span>
      </div>

      <div className="about__box">
        <i class="bx bx-check-circle about__icon"></i>

        <h3 className="about__title">Certified</h3>
        <span className="about__subtitle">Fullstack Developer</span>
      </div>

      <div className="about__box">
        <i class="bx bx-spreadsheet about__icon"></i>

        <h3 className="about__title">Projects</h3>
        <span className="about__subtitle">Are listed below</span>
      </div>
    </div>
  );
};

export default Info;
