import IntroMessage from "../components/introMessage";
import Profiles from "../components/profiles";
import { DatabankInterface } from "../databank";

interface Props {
  profilesCount: number;
  profiles: DatabankInterface[];
}

const Home = ({ profilesCount, profiles }: Props) => {
  return (
    <main>
      <IntroMessage profilesCount={profilesCount} />
      <Profiles profiles={profiles} />
    </main>
  );
};

export default Home;
