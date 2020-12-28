import React from "react";
import "../styles/nominee.css";
import Card from "./Card";
import Loading from "./Loading";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";

const Nominations = ({
  result,
  nominees,
  changeNominees,
  limit,
  loading,
  changeLoading,
}) => {
  const change = (res) => {
    var new_arr = [...nominees];
    new_arr.push(res);
    changeNominees(new_arr);
  };
  const check_item = (res) => {
    return nominees.map((n) => n.imdbID).includes(res.imdbID);
  };
  if (loading) {
    return <Loading />;
  }
  if (result) {
    if (result.Error) {
      return <div>No results found</div>;
    }
    const result_list = result.map((res, key) => {
      return (
        <Card
          ele={res}
          key={key}
          disabled={nominees.length >= limit || check_item(res)}
          nominate={true}
          change={change}
        />
      );
    });
    return (
      <div className="search_results">
        {/* {loading ? <Loading /> : <Carousel>result_list</Carousel>} */}
        {/* <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={40}
          totalSlides={result_list.length}
        >
          <Slider>{result_list}</Slider>
        </CarouselProvider> */}
        {result_list}
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Nominations;
