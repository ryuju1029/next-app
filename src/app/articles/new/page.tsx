"use client";
import styled from "styled-components";
import ArticleCreateModal from "../../components/ArticleCreateModal/page";
import { Dispatch } from "react";

type New = {
  open: boolean;
  setOpen: Dispatch<boolean>;
};

export const New = (props: New) => {
  const { open, setOpen } = props;

  return (
    <Wrapper>
      {open && <ArticleCreateModal setOpen={setOpen} />}
      <></>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #eee;
`;

export default New;
