import React from "react";
import { useContext } from "react";
import { MyContext } from "../../utils/userContext";

export default function AboutUs() {
  const contextObj = useContext(MyContext);
  return <h2>This is About-Us page-{contextObj}</h2>;
}
