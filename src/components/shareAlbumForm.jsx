import React from "react";
import gsap from "gsap";
import isValidEmail from "../utils/validateEmail";

const ShareAlbumForm = ({ currentProfile }) => {
  const { firstName, lastName } = currentProfile;

  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    const emailAddress = formJson.email.trim();

    if (isValidEmail(emailAddress)) {
      const emailBody = `Hi, ${firstName} ${lastName} has shared his album from PhotoStudio with you, click here to view the full album.`;

      /*
    Send form data via local mail client
    Source: https://stackoverflow.com/questions/271171/sending-emails-with-javascript/271172#271172
    */
      const link = `mailto:${emailAddress}?subject=${encodeURIComponent(
        "Invitation to view album"
      )}&body=${emailBody}`;

      window.location.href = link;
    } else {
      alert("email not valid");
    }
  }

  // Animate form out
  const handleCloseShareForm = () => {
    gsap.to(".share-album-form", {
      display: "none",
      opacity: 0,
      xPercent: 0,
      duration: 0.4,
      ease: "power1",
    });
  };

  return (
    <div className="share-album-form">
      <form onSubmit={handleSubmit}>
        <label>
          <input type="email" name="email" defaultValue="Email" />
        </label>
        <button className="send-form" type="submit">
          Send
        </button>
      </form>
      <button className="close-form" onClick={handleCloseShareForm}>
        X
      </button>
    </div>
  );
};

export default ShareAlbumForm;
