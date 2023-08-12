import React from "react";
import "./packetidjen.css";
import assetDetail from "../../Assets/Data/assetDetail";


import { HiOutlineLocationMarker } from "react-icons/hi";
import { useParams } from "react-router-dom";


export default function PacketIdjen() {
  const { slug } = useParams();
 const asset = assetDetail.find((item) => item.slug === slug);
  // If no matching asset found, you can display a message or handle it accordingly
  if (!asset) {
    return <div>Tidak Ada Data</div>;
  }

  // Rest of the code remains the same as before...
  const {
    imgSrc,
    destTitle,
    location,
    grade,
    icon,
    fees,
    itenerary,
  } = asset; // Since it's filtered, use the first element

  return (
    <section className="packet container section">
      <div className="secTitle">
        <h3 className="title">{destTitle}</h3>
      </div>
      <div className="secContent grid">
        <div key={slug} className="singleDestination">
          <div className="imageDiv">
            <img src={imgSrc} alt={destTitle} />
          </div>

          <div className="cardInfo">
            <h4 className="destTitle">{destTitle}</h4>
            <span className="continent flex">
              <HiOutlineLocationMarker className="icon" />
              <span className="name">{location}</span>
            </span>

            <div className="fees flex">
              <div className="grade">
                {grade.map((gradeItem, index) => (
                  <div key={index}>
                    <img src={icon[index]} alt={destTitle} />
                    <span>{gradeItem}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="price flex">
              {fees.map((fee, index) => (
                <div key={index} className="fee">
                  <h5>{fee}</h5>
                </div>
              ))}
            </div>
          </div>

          <div className="desc">
            {itenerary.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
