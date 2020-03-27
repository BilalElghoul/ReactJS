import React from "react";
import {
  HomePage,
  HomeInformation,
  HomeTitle,
  HomeInfo,
  HomeDesc,
  SpanGra,
  HomeBtn
} from "./style.js";

const Home = () => {
  return (
    <React.Fragment>
      <HomePage>
        <div className="container">
          <HomeInformation>
            <HomeTitle>Bilal Elghoul</HomeTitle>
            <HomeInfo>Creative Director</HomeInfo>
            <HomeDesc>
              Iam a professional <SpanGra>UX Designer</SpanGra> and Front-End
              Developer creating modern and resposive designs to Web and Mobile.
              Let us work together. Thank you.
            </HomeDesc>
            <HomeBtn>Let's Begin</HomeBtn>
          </HomeInformation>
        </div>
      </HomePage>
    </React.Fragment>
  );
};

export default Home;
