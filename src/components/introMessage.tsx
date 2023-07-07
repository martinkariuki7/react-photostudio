interface Props {
  profilesCount: number;
}

const IntroMessage = ({ profilesCount }: Props) => {
  return (
    <section className="home_intro">
      <p id="homeIntroMessage">
        You have access to {profilesCount} customer profiles.
      </p>
    </section>
  );
};

export default IntroMessage;
