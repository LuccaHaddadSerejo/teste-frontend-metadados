import { StyledContainer, StyledWrap } from "./style";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import React from "react";

interface iLayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: iLayoutProps) => {
  return (
    <StyledWrap>
      <Header />
      <StyledContainer>{children}</StyledContainer>
      <Footer />
    </StyledWrap>
  );
};

export default Layout;
