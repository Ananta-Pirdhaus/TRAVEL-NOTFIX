import React from "react";
import "./packetidjen.css";
import assetDetail from "../../Assets/Data/assetDetail";
// icon
import { HiOutlineLocationMarker } from "react-icons/hi";
import { useParams } from "react-router-dom"; // Import useParams
// import { useLocation } from "react-router-dom";

export default function PacketIdjen() {
  const { slug } = useParams();
  // const locations = useLocation();
  // const searchParams = new URLSearchParams(locations.search);
  // const slugParam = searchParams.get("slug");
  // Filter the assetDetail array based on the given id
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
    fees,
    fees1,
    fees2,
    fees3,
    itenerary,
    itenerary1,
    itenerary2,
    itenerary3,
    itenerary4,
    itenerary5,
    itenerary6,
    itenerary7,
    itenerary8,
    itenerary9,
    itenerary10,
    itenerary11,
    itenerary12,
    itenerary13,
    itenerary14,
    itenerary15,
    itenerary16,
    itenerary17,
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
                <span>{grade}</span>
              </div>
            </div>
            <div className="price flex">
              <h5>{fees}</h5>
              <h5>{fees1}</h5>
              <h5>{fees2}</h5>
              <h5>{fees3}</h5>
            </div>
          </div>

          <div className="desc">
            <p>{itenerary}</p>
            <p>{itenerary1}</p>
            <p>{itenerary2}</p>
            <p>{itenerary3}</p>
            <p>{itenerary4}</p>
            <p>{itenerary5}</p>
            <p>{itenerary6}</p>
            <p>{itenerary7}</p>
            <p>{itenerary8}</p>
            <p>{itenerary9}</p>
            <p>{itenerary10}</p>
            <p>{itenerary11}</p>
            <p>{itenerary12}</p>
            <p>{itenerary13}</p>
            <p>{itenerary14}</p>
            <p>{itenerary15}</p>
            <p>{itenerary16}</p>
            <p>{itenerary17}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
