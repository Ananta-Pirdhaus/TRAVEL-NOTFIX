import React from "react";
import { MdPlace } from "react-icons/md";
import styled from "styled-components";
import PText from "../../Ptext";

const ItemStyles = styled.div`
  padding: 1rem;
  background-color: var(--cardBG);
  display: flex;
  align-items: center;
  border-radius: 8px;
  margin-bottom: 1.3rem;
  margin-left: 1rem
  font-size: 1.2rem;
  .item {
    color: var(--blackColor);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  svg {
    width: 3.5rem;
  }
  .info {
    color: var(--textColor);
  }
}
`;

export default function ContactInfo({
  icon = <MdPlace />,
  text = "I need text ",
}) {
  return (
    <ItemStyles>
      <div className="item icon">{icon}</div>
      <div className="info text">
        <PText>{text}</PText>
      </div>
    </ItemStyles>
  );
}
