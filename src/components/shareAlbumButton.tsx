import gsap from "gsap";

const ShareAlbumButton = () => {
  const handleShareAlbum = () => {
    gsap.to(".share-album-form", {
      display: "flex",
      opacity: 1,
      xPercent: 100,
      duration: 0.4,
      ease: "power1",
    });
  };

  return (
    <button onClick={handleShareAlbum} id="share_btn" className="share">
      Share album
    </button>
  );
};

export default ShareAlbumButton;
