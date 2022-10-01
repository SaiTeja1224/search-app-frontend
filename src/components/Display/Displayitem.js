import React from "react";
import useHover from "../../hooks/useHover";

import classes from "./DisplayItem.module.css";

export default function Displayitem(props) {
  const [linkHovering, linkHoverProp] = useHover();
  return (
    <section className={classes.ad}>
      <img
        src={props.result.imgurl}
        alt="The ad being displayed"
        className={classes.imgUrl}
      />
      <p {...linkHoverProp} className={classes["ad-desc"]}>
        <a href={props.result.company.companyUrl}>
          {linkHovering ? props.result.cta : props.result.company.companyName}
        </a>
      </p>
      <p className={classes["ad-desc"]}>{props.result.primaryText}</p>
      <p className={classes["ad-desc"]}>{props.result.description}</p>
    </section>
  );
}
