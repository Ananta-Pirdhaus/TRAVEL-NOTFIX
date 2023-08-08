import React, {useEffect} from "react";
import "./footer.css";
import video2 from '../../Assets/video2.mp4'
import { MdTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { SiTripadvisor } from "react-icons/si";
import { FiChevronRight } from "react-icons/fi";
import Aos from "aos";
import "aos/dist/aos.css";


const Footer = () => {
// Animation
   useEffect(() => {
     Aos.init({ duration: 2000 });
   }, []);



  return (
    <section className="footer">
      <div className="videDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div data-aos="fade-up" className="secContent container">
        <div className="contactDiv flex">
          <div className="text">
            <small>KEEP ON TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          {/* <div className="inputDiv flex">
            <input type="text" placeholder="Enter Email Address" />
            <button className="btn flex" type="submit">
              SEND <FiSend className="icon"/>
            </button>
          </div> */}
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div data-aos="fade-up" className="logoDiv">
              <a href="#" className="logo flex">
                <MdTravelExplore className="icon" />
                <span className="logoText">Trans</span>
                <span className="spanLogo">BlueFire</span>
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
              Selamat datang di Trans Blue Fire, perusahaan tour and travel yang
              berbasis di Banyuwangi, tempatnya petualangan dan keajaiban alam
              yang mengagumkan! Kami adalah mitra perjalanan terpercaya Anda
              untuk menjelajahi pesona Banyuwangi dan sekitarnya dengan cara
              yang menyenangkan, aman, dan tak terlupakan.
            </div>

            <div data-aos="fade-up" className="footerSocials flex">
              <AiOutlineTwitter className="icon" />
              <AiFillYoutube className="icon" />
              <AiFillFacebook className="icon" />
              <AiFillInstagram className="icon" />
              <SiTripadvisor className="icon" />
            </div>
          </div>

          <div data-aos="fade-up" className="footerLinks grid">
            {/* Group One */}
            <div className="linkGroup">
              <span className="groupTitle">OUR AGENCY</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Travel Agency
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Changing Money
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Insurance
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Tourism
              </li>
            </div>
          </div>

          <div data-aos="fade-up" className="footerDiv flex">
            <small>Best Travel Website</small>
            <small>Copyright Reserved - Tap1r 2023</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
