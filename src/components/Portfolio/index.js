import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  PortfolioComponent,
  PortfolioTitle,
  SpanPT,
  PortfolioList,
  PortfolioItem,
  ImageWrapper,
  Image,
  Overlay,
  OverlaySpan
} from "./style.js";

const Portfolio = () => {
  // Like state = { images : []}
  const [images, setImages] = useState([]);
  useEffect(() => {
    axios.get("data.json").then(res => {
      console.log(res);
      setImages(res.data.portfolio);
    });
  }, []);

  const portfolioImages = images.map(imageItem => {
    return (
      <ImageWrapper key={imageItem.id}>
        <Image src={imageItem.image} alt="" />
        <Overlay>
          <OverlaySpan>Show Image</OverlaySpan>
        </Overlay>
      </ImageWrapper>
    );
  });

  return (
    <PortfolioComponent>
      <PortfolioTitle>
        <SpanPT>My</SpanPT> Portfolio
      </PortfolioTitle>
      <PortfolioList>
        <PortfolioItem active={true}>All</PortfolioItem>
        <PortfolioItem>HTML</PortfolioItem>
        <PortfolioItem>Photoshop</PortfolioItem>
        <PortfolioItem>Wordpress</PortfolioItem>
        <PortfolioItem>Mobile</PortfolioItem>
      </PortfolioList>

      <div className="box">{portfolioImages}</div>
    </PortfolioComponent>
  );

 
};

export default Portfolio;
