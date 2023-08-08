import React from "react";
import styled from "styled-components";
import MapImg from "../../Assets/map.jpg";
import PText from "../Ptext";

const MapStyles = styled.div`
  background: url(${MapImg}) no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 400px;
  font-size: 100px
  .container {
    position: relative;
    min-height: 400px;
  }
  .map__card {
    // position: absolute;
    //  top: -10%
    //  right: 10%;
    //  bottom: 5%
    // padding: 1rem;
    // // background: var(--textColor);
    // width: 100%;
    // max-width: 300px;
    // border-radius: 12px;
    margin-bottom: 10rem;
    justify-content: center
  }
  .map__card__link {
    color: var(--blackColor)
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 3rem;
    margin-left: 30rem;
    text-decoration: underline;  
    justify-content: center
  }
  @media only screen and (max-width: 768px) {
    background-position: 50% center;
  }
  @media only screen and (max-width: 400px) {
    .map__card {
      max-width: none;
      right: auto;
    }
  }
`;

export default function Map() {
  return (
    <MapStyles>
      <div className="container">
        <div className="map__card">
          <PText>Blue Fire Banyuwangi</PText>
          <a
            className="map__card__link"
            href="https://www.bing.com/maps?osid=f76f1701-fde5-4353-bbe3-9b2f7724225c&cp=-8.219238~114.355096&lvl=15&v=2&sV=2&form=S00027"
            target="_blank"
            rel="noreferrer"
          >
            Open in google map
          </a>
        </div>
      </div>
      {/* <img src={MapImg} alt="Map" /> */}
    </MapStyles>
  );
}
