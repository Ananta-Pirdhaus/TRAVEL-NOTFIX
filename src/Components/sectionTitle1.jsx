import React from "react";
import styled from "styled-components";

const SectionTitleStyle = styled.div`
  text-align: center;
  p {
    font-family: "Poppins";
    font-size: 2rem;
  }
  @media only screen and (max-width: 768px) {
    text-align: center;
    p {
      font-size: 1.2rem;
    }
`;

export default function SectionTitle({
  subheading = "Need Subheading",
}) {
  return (
    <SectionTitleStyle className="section-title">
      <p>{subheading}</p>
    </SectionTitleStyle>
  );
}
