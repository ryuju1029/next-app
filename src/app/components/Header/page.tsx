"use client";
import styled from "styled-components";
import Link from "next/link";
import { Cluster } from "../Cluster";

export const Header = () => {
  return (
    <Wrapper>
      <Title>
        <Link href={"/"}>Blog</Link>
      </Title>
      <Nav>
        <Link href={"/"}>記事を書く</Link>
      </Nav>
    </Wrapper>
  );
};

const Wrapper = styled(Cluster)`
  background-color: #f5f5f5;
  width: 100%;
  padding: 10px 20px;
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 30px;
`;

const Nav = styled.nav`
  margin-left: auto;
`;

export default Header;
