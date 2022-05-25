import React, { useEffect } from "react";
import { isLoggedIn } from "../helper/Validator";

export const DefaultLayout = ({ component: Component }) => {
  useEffect(() => {
    isLoggedIn();
  }, []);

  return <Component />;
};
