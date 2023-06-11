import React from "react";
import * as Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <section className="m-h-screen">
      <Header />
      <Layout.Home />
      <Footer />
    </section>
  );
};

export default Home;
