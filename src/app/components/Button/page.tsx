"use client";
import React, { use } from "react";
import styled from "styled-components";

type Button = {
  text: string;
};

export const Button = (props: Button) => {
  const { text } = props;

  return (
    <Wrapper>
      <ButtonWrapper>{text}</ButtonWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 10px 20px;
  align-items: center;
  bottom: 0;
`;

const ButtonWrapper = styled.button`
  width: 100%;
  height: 50px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  bottom: 0;
  tezt-align: center;
  border: none;
  border-radius: 3px;
  text-align: center;
  border: 1px solid #ccc;
`;

export default Button;
