import React from "react";
import styled from "styled-components";
import { MdPlace } from "react-icons/md";
import PText from "../../Ptext";

const FormStyle = styled.form`
  padding: 1rem;
  background-color: var(--cardBG);
  display: flex;
  align-items: center;
  border-radius: 8px;
  margin-bottom: 2rem;
  .item {
    color: var(--blackColor);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  svg {
    width: 4rem;
  }
}
`;
export default function contactForm({
  icon = <MdPlace />,
  text = "I need text ",
}) {
  return (
    <FormStyle>
      <div className="item icon">{icon}</div>
      <div className="Text">
        <PText>{text}</PText>
      </div>
    </FormStyle>
  );
}