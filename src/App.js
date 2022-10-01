import classes from "./App.module.css";

import Search from "./components/Search/Search";
import Display from "./components/Display/Display";
import { useState } from "react";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(false);

  const addToResults = (newData) => {
    setSearchResults(newData);
  };

  const errorPresent = (err) => {
    setError(err);
  };

  const content = !error ? (
    <>
      <section className={classes["search-section"]}>
        <h1>Search Box</h1>
        <Search addToResults={addToResults} errorPresent={errorPresent} />
      </section>
      <section className={classes["ad-section"]}>
        {searchResults.length > 0 && <Display searchResults={searchResults} />}
      </section>
    </>
  ) : (
    <p>Something Went Wrong!</p>
  );

  return <article>{content}</article>;
}

export default App;
