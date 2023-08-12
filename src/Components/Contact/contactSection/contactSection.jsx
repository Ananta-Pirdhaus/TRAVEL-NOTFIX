import React from "react";
import ContactInfo from "../ContactInfo/contactInfo";
import Map from "../../Map/map";
import { MdLocalPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import "./contactSection.css"; // Impor file CSS yang sesuai

export default function ContactSection() {
  return (
    <div>
      <div className="contact container section">
        <div className="secTitle">
          <h3 className="title">
            Contact Us
          </h3>
        </div>
        <div className="contactSection__wrapper">
          <div className="left">
            <ContactInfo icon={<MdLocalPhone />} text="+6281-3823-4333" />
            <ContactInfo
              icon={<MdEmail />}
              text="bluefirebanyuwangi@gmail.com"
            />
            <ContactInfo
              icon={<AiFillInstagram />}
              text="@bluefirebanyuwangi"
            />
            <ContactInfo text="Jl.Kepiting No.313, Sobo, Kota Banyuwangi" />
          </div>
          <div className="contactSection__divider"></div>
          <div className="right">
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
}
