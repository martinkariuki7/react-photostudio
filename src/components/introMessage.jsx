import React from "react";

const IntroMessage = ({ profilesCount }) => {
  return (
    <section className="home_intro">
      <p id="homeIntroMessage">
        You have access to {profilesCount} customer profiles.
      </p>
    </section>
  );
};

export default IntroMessage;
