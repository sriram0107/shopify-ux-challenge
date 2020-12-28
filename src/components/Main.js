import React, { useEffect, useState } from "react";
import Search from "./SearchComponent";
import Nominations from "./Nominations";
import Result from "./ResultComponent";
import "../styles/main.css";

const Main = () => {
  const [nominees, changeNominees] = useState([]);
  const [search, changeSearch] = useState(null);
  const [limit, changeLimit] = useState(5); //Constant state - User can only nominate 5 movies

  return (
    <div className="home_page_dark">
      {nominees.length === limit ? <h1>All Set! Nominate Now</h1> : <p></p>}
      <Search changeSearch={changeSearch} />
      <Nominations
        result={search}
        nominees={nominees}
        changeNominees={changeNominees}
        limit={limit}
      />
      <Result nominees={nominees} changeNominees={changeNominees} />
    </div>
  );
};

export default Main;

/*
todos
1. prevent duplication when returning back
2. prevent user from adding once limit has been reached -- done
3. COMPLETELY RESTYLE THE PAGE!!!!!
*/
