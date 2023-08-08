import React from "react";
import { Link } from "react-router-dom";
import './ServiceItem.css';
import ProjectImg from "../../Assets/Image/imgP(1).jpeg";

export default function ServiceItem({
  img = ProjectImg,
  title = "Project Name",
  desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  slug,
}) {
  return (
    <div className="serviceItem">
      <Link to={`/Paket/${slug}`} className="img">
        <img src={img} alt="project img" />
      </Link>
      <div className="info">
        <Link to={`/Paket/${slug}`}>
          <h3 className="title">{title}</h3>
        </Link>
        <p className="desc">{desc}</p>
      </div>
    </div>
  );
}
