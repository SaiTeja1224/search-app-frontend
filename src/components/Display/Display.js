import React from "react";
import Displayitem from "./Displayitem";

export default function Display(props) {
  const Items = props.searchResults.map((item, idx) => (
    <Displayitem key={idx} result={item} />
  ));
  return <>{Items}</>;
}
