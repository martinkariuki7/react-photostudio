import React from "react";
import { DatabankInterface } from "../databank";

const ProfileContext = React.createContext<DatabankInterface[] | undefined>(
  undefined
);

export default ProfileContext;
