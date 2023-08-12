import React from "react";
import { MdPlace } from "react-icons/md";
import PText from "../../Ptext";
import "./ContactInfo.css";


export default function ContactInfo({
  icon = <MdPlace />,
  text = "I need text ",
}) {
  return (
    <div className="ContactInfo">
      <div className="item icon">{icon}</div>
      <div className="info text">
        <PText>{text}</PText>
      </div>
    </div>
  );
}
