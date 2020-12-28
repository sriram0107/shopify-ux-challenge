import React, { useEffect, useState } from "react";
import Search from "./SearchComponent";
import Nominations from "./Nominations";
import Result from "./ResultComponent";
import "../styles/main.css";

const Main = () => {
  const [nominees, changeNominees] = useState([]);
  const [search, changeSearch] = useState(null);
  const [loading, changeLoading] = useState(false);
  const [limit, changeLimit] = useState(5); //Constant state - User can only nominate 5 movies

  return (
    <div className="home_page_dark">
      <div className="search_area">
        {nominees.length === limit ? (
          <p className="intro_text">All Set! Nominate Now</p>
        ) : (
          <p className="intro_text">The Shoppies</p>
        )}
        <Search changeSearch={changeSearch} changeLoading={changeLoading} />
        <Nominations
          result={search}
          nominees={nominees}
          changeNominees={changeNominees}
          limit={limit}
          loading={loading}
          changeLoading={changeLoading}
        />
      </div>
      <Result
        nominees={nominees}
        changeNominees={changeNominees}
        limit={limit}
      />
    </div>
  );
};

export default Main;

/*
todos
1. handle situation when movie is not found
2. loading icon
*/
