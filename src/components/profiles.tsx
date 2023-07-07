import { DatabankInterface } from "../databank";

interface Props {
  profiles: DatabankInterface[];
}

import { Link } from "react-router-dom";

const Profiles = ({ profiles }: Props) => {
  return (
    <ul className="profiles_wrapper">
      {profiles.map((profile) => (
        <li key={profile.id}>
          <Link to={`/single-profile/${profile.id}`}>
            <figure>
              <img
                src={profile.featuredImage}
                alt={profile.firstName + " " + profile.lastName}
              />
              <figcaption>
                {profile.firstName + " " + profile.lastName}
              </figcaption>
            </figure>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Profiles;
