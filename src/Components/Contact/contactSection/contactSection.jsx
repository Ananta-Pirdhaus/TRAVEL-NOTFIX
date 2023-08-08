import React from "react";
import SectionTitle from "../../sectionTitle";
import ContactInfo from "../ContactInfo/contactInfo";
import { MdLocalPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import styled from "styled-components";
import ContactForm from "../ContactForm/contactForm";

const ContactSectionStyle = styled.div`
  padding: 10rem 0;
  .contactSection__wrapper {
    display: flex;
    gap: 4rem;
    margin-top: 5rem;
    justify-content: center;
    position: relative;
  }
  .contactSection__wrapper::after {
    position: absolute;
    content: "";
    width: 2px;
    height: 70%;
    background-color: var(--blackColor);
    left: 50%;
    top: 50%;
    bottom: 50%;
    transform: translate(-50%, -50%);
  }

  .left {
    width: 100%;
    max-width: 500px;
  }
  .right {
    left: 100%;
    margin-top: 40px;
    max-width: 500px;
    width: 100%;
  }
  @media only screen and (max-width: 840px) {
    .contactSection__wrapper {
      flex-direction: column;
    }
    .contactSection__wrapper::after{
        display: none;
    }
    .left,.right{
        max-width:100%;
    }
    
  }
`;

export default function ContactSection() {
  return (
    <ContactSectionStyle>
      <div>
        <div className="container">
          <SectionTitle heading="Contact" subheading="Get in touch" />
          <div className="contactSection__wrapper">
            <div className="left">
              <ContactInfo icon={<MdLocalPhone />} text="+6282231039894" />
              {/* <ContactInfo icon={<MdEmail />} /> */}
              <ContactInfo
                icon={<MdEmail />}
                text="bluefirebanyuwangi@gmail.com"
              ></ContactInfo>
              <ContactInfo
                icon={<AiFillInstagram />}
                text="@bluefirebanyuwangi"
              />
              <ContactInfo text="Jl.PB Sudirman, No.9B" />
            </div>
            <div className="right">
              <ContactForm></ContactForm>
              <ContactForm></ContactForm>
              <ContactForm></ContactForm>
            </div>
          </div>
        </div>
      </div>
    </ContactSectionStyle>
  );
}
