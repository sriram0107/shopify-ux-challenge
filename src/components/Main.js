import React, { useEffect, useState } from "react";
import Search from "./SearchComponent";
import Nominations from "./Nominations";
import Result from "./ResultComponent";
import Confirmation from "./Confirmation";
import "../styles/main.css";

const Main = () => {
  const [nominees, changeNominees] = useState([]);
  const [search, changeSearch] = useState(null);
  const [loading, changeLoading] = useState(false);
  const [limit, changeLimit] = useState(5); //Constant state - User can only nominate 5 movies
  const [confirmed, changeConfirmed] = useState(false);

  const confirm = () => {
    changeConfirmed(true);
  };
  return (
    <div className="home_page_dark">
      <div className="search_area">
        {confirmed ? (
          <p className="intro_text">Thanks for Nominating!</p>
        ) : nominees.length === limit ? (
          <div className="heading">
            <p className="intro_text">All Set! Nominate Now</p>
            <button className="confirm" onClick={() => confirm()}>
              Confirm Nomination
            </button>
          </div>
        ) : (
          <p className="intro_text">The Shoppies</p>
        )}
        {confirmed ? (
          <Confirmation />
        ) : (
          <>
            <Search changeSearch={changeSearch} changeLoading={changeLoading} />
            <Nominations
              result={search}
              nominees={nominees}
              changeNominees={changeNominees}
              limit={limit}
              loading={loading}
              changeLoading={changeLoading}
            />
          </>
        )}
      </div>
      <Result
        nominees={nominees}
        changeNominees={changeNominees}
        limit={limit}
        confirm={confirmed}
      />
    </div>
  );
};

export default Main;

/*
todos
1. Implement local storage
2. make email link
3. make shareable social media links
*/
