import React, { Component } from "react";
import IntroMessage from "../components/introMessage";
import Profiles from "../components/profiles";

const Home = ({ profilesCount, profiles }) => {
  return (
    <main>
      <IntroMessage profilesCount={profilesCount} />
      <Profiles profiles={profiles} />
    </main>
  );
};

export default Home;
