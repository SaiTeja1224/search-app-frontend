import React, { useRef } from "react";
import Input from "../UI/Input/Input";

import classes from "./Search.module.css";

const url = new URL("http://localhost:8000/ads");

export default function Search(props) {
  const inputData = useRef(null);

  const searchHandler = (e) => {
    e.preventDefault();
    const params = { keyword: inputData.current.value };
    url.search = new URLSearchParams(params).toString();

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        props.addToResults(data.ads);
      })
      .catch(() => {
        props.errorPresent(true);
      });
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Input
        type="text"
        name="search"
        inputRef={inputData}
        cName="searchbox-inp"
        inputHandler={searchHandler}
      />
    </form>
  );
}
