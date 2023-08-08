import React, {useEffect} from "react";
import "./home.css";
import video from '../../Assets/video.mp4'
import {FiFacebook} from 'react-icons/fi'
import {FiInstagram} from "react-icons/fi";
import {LiaTripadvisor} from "react-icons/lia";
import {BsListTask} from 'react-icons/bs';
import { TbApps } from "react-icons/tb";

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
  //  Animation
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])





  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>

      <div className="homeContent container">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">
            Our Packages
          </span>

          <h1 data-aos="fade-up" className="homeTitle">
            Search Your Holiday
          </h1>

          <div data-aos="fade-up" className="homeFooterIcons flex">
            <div className="rightIcons">
              <FiFacebook className="icon" />
              <FiInstagram className="icon" />
              <LiaTripadvisor className="icon" />
            </div>

            <div className="leftIcons">
              <BsListTask className="icon" />
              <TbApps className="icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  
};

export default Home;
