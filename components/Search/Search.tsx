import Fuse from "fuse.js";
import { EventHandler, useState } from "react";
import locations from "client/locations.json";

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

  function onSearch({ currentTarget }) {
    setQuery(currentTarget.value);
  }

  return (
    <>
      <form className="search">
        <label>Search City or State</label>
        <input type="text" value={query} onChange={onSearch}></input>
      </form>
      <ul className="locations">
        {locationResults.map((location) => {
          const { city, state } = location;
          return (
            <div>
              {city},{state}
            </div>
          );
        })}
      </ul>
    </>
  );
}

export default Search;
