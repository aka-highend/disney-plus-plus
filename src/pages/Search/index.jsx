import React, { Fragment, useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import PopularSearches from "./PopularSearches";
import { fetchData } from '../../api/API';

const Search = () => {
  const [query, setQuery] = useState();
  const [data, setData] = useState([]);
  
  const queryHandler = (event) => { 
    const input = event.target.value.trim();
    console.log(input);
    setQuery(input);
  };

  const endPoint = query ? `search/multi?query=${query}&include_adult=false&page=1` : "trending/all/day";

  useEffect(() => {
    const featchDataCaller = async () => {
      const res = await fetchData(endPoint);
      setData(res?.results);
    };
    featchDataCaller();
  }, [endPoint]);


  return (
    <Fragment>
      <SearchBar onQuery={queryHandler} />
      <PopularSearches data={data} query={query} />
    </Fragment>
  );
};
export default Search;
