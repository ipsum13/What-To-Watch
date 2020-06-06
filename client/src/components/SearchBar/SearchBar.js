import React, { useState, useCallback, Fragment } from "react";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";

import { API_URL, API_KEY, IMAGE_BASE_URL, POSTER_SIZE } from "../../api/Api";
import "./SearchBar.css";

const SearchBar = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState([]);
  var timeout = null;

  const handleSearch = useCallback((query) => {
    setIsLoading(true);

    fetch(
      `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${query}`
    )
      .then((resp) => resp.json())
      .then((items) => {
        const options = items.results.map((i) => ({
          avatar_url: `${IMAGE_BASE_URL}${POSTER_SIZE}/${i.poster_path}`,
          id: i.id,
          login: i.title,
          year: i.release_date,
          vote: i.vote_average,
        }));

        setOptions(options);

        setIsLoading(false);
      });
  });

  return (
    <Fragment>
      <div className="rmdb-searchbar">
        <div className="rmdb-searchbar-content">
          <AsyncTypeahead
            id="async-example"
            isLoading={isLoading}
            labelKey="login"
            minLength={3}
            size="lg"
            onSearch={handleSearch}
            onChange={(selected) => {
              clearTimeout(timeout);

              timeout = setTimeout(() => {
                props.searchResult(selected);
              }, 300);
            }}
            options={options}
            placeholder="Search for a movie..."
            clearButton={true}
            renderMenuItemChildren={(option, props) => (
              <div>
                <img
                  alt={option.login}
                  src={option.avatar_url}
                  style={{
                    height: "24px",
                    marginRight: "10px",
                    width: "24px",
                  }}
                />
                <span>{option.login}</span>
              </div>
            )}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default SearchBar;
