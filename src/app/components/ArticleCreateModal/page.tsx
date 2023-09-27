"use client";
import styled from "styled-components";

type InputProps = {
  height: string;
};

export const ArticleCreateModal = () => {
  return (
    <Background>
      <Wrapper>
        <Input placeholder={"URL"} height={"50px"} />
        <Input placeholder={"タイトル"} height={"50px"} />
        <Textarea placeholder={"本文"} height={"300px"} />
      </Wrapper>
    </Background>
  );
};

const Background = styled.div`
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  background-color: #fff;
  border-radius: 10px;
  width: 800px;
  height: 800px;

  @media (max-width: 800px) {
    width: 500px;
    height: 500px;
  }
`;

const Input = styled.input<InputProps>`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  width: 80%;
  height: ${(props) => props.height || "50px"};
  padding: 20px;
  font-size: 20px;
  box-sizing: border-box;
  border: 1px solid #ccc;
`;

const Textarea = styled.textarea<InputProps>`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  width: 80%;
  height: ${(props) => props.height || "50px"};
  padding: 20px;
  font-size: 20px;
  box-sizing: border-box;
  border: 1px solid #ccc;
`;

export default ArticleCreateModal;
