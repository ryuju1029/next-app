"use client";
import styled from "styled-components";
import ArticleCreateModal from "../../components/ArticleCreateModal/page";

type New = {
  open: boolean;
};

export const New = (props: New) => {
  const { open } = props;

  return (
    <Wrapper>
      {open && <ArticleCreateModal />}
      <></>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #eee;
`;

export default New;
