import React from "react";

const ProfileIntro = ({ currentProfile }) => {
  const { firstName, lastName, dateOfShoot, location } = currentProfile;

  return (
    <React.Fragment>
      <h1>{`${firstName} ${lastName}`}</h1>
      <div className="profile_details_wrapper">
        <ul id="profile_details" className="profile_details">
          <li id="date-of-shoot">Date of shoot: {dateOfShoot}</li>
          <li id="location">Location: {location}</li>
          <li className="alert">
            Bildene er tilgjengelige til og med torsdag 2. juni. Etter datoen
            blir de fjernet fra nettbuttikken.
          </li>
        </ul>
      </div>
      <div className="profile_description">
        <p>
          Vil du har alle bildene digitalt? Nå kan du kjøpe alle bildene vi har
          tatt digitalt for kun kr 659! Vi leverer filer i høy oppløsning til
          fritt bruk på f.eks julekort, kalendere, lerret og mye annet - og du
          får en rabattkode som gir deg 30% rabatt hos PhotoStudio.
        </p>
      </div>
    </React.Fragment>
  );
};

export default ProfileIntro;
