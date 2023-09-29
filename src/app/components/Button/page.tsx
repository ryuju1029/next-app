"use client";
import React, { use } from "react";
import styled from "styled-components";
import { Dispatch } from "react";

type ContentProps = {
  width: string;
};

type Button = {
  text: string;
  width: string;
  functions: void;
  setState: Dispatch<boolean>;
};

export const Button = (props: Button) => {
  const { text, width, functions, setState } = props;

  //functionの型が何か確認する

  return (
    <Wrapper>
      <Content width={width}>
        <ButtonWrapper>{text}</ButtonWrapper>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div<ContentProps>`
  width: ${(props) => props.width || "50px"};
  padding: 10px 20px;
  align-items: center;
  bottom: 0;
`;

const ButtonWrapper = styled.button`
  width: 100%;
  height: 50px;
  padding: 10px 20px;
  bottom: 0;
  tezt-align: center;
  border: none;
  border-radius: 3px;
  border: 1px solid #ccc;
`;

export default Button;
