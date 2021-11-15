import Fuse from "fuse.js";
import { EventHandler, useState } from "react";
import locations from "client/locations.json";
import styles from "./Search.module.css";
export interface SearchProps {}

function Search({}: SearchProps) {
  const [query, setQuery] = useState("");

  const fuse = new Fuse(locations, {
    keys: ["city", "state"],
    includeScore: true,
  });

  const results = fuse.search(query);
  const locationResults = query ? results.map((result) => result.item) : [];

  console.log(results);

  const onSearchResultClick = (e) => {
    console.log(e);
    setQuery("");
  };

  function onSearch({ currentTarget }) {
    setQuery(currentTarget.value);
  }

  return (
    <div className={styles["search-form"]}>
      <form className="search">
        <input
          placeholder="Search City or State"
          type="text"
          value={query}
          onChange={onSearch}
        ></input>
      </form>

      {locationResults.length > 0 && (
        <ul className="locations">
          {locationResults.map((location) => {
            const { city, state } = location;
            return (
              <div onClick={onSearchResultClick}>
                <li>
                  <strong>City: </strong> {city}
                </li>
                <li>
                  <strong>State: </strong> {state}
                </li>
              </div>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Search;
