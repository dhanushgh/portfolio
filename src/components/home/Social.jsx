import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="mailto:ghdhanush1@gmail.com"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil uil-envelope"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/dhanush-gh/"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil uil-linkedin-alt"></i>
      </a>

      <a
        href="https://github.com/dhanushgh"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil uil-github-alt"></i>
      </a>

      <a
        href="https://twitter.com/dhanush_gh"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil uil-twitter-alt"></i>
      </a>
    </div>
  );
};

export default Social;
