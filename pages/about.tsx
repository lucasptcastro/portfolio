import React from "react";
import Navbar from "../components/_ui/Navbar/navbar";
import About from "../src/about";

const Index: React.FC = () => {
  return (
    <>
      <Navbar></Navbar>
      <About />
    </>
  );
};

export default Index;
