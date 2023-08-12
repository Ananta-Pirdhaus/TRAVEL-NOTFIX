import React from "react";
import styled from "styled-components";

const SectionTitleStyle = styled.div`
  text-align: center;
  p {
    margin-top: 1rem;
    font-family: "Poppins";
    font-size: 2rem;
  }
  @media only screen and (max-width: 768px) {
    text-align: center;
    p {
      font-size: 1.2rem;
    }
`;

export default function SectionTitle1({
  heading = "Need Subheading",
}) {
  return (
    <SectionTitleStyle className="section-title">
      <p>{heading}</p>
    </SectionTitleStyle>
  );
}
