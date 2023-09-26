"use client";

import { Header } from "./components/Header/page";
import { Footer } from "./components/Footer/page";
import { Cluster } from "./components/Cluster";
import { MainContents } from "./components/MainContents/page";

export const Home = () => {
  return (
    <main>
      <Cluster>
        <Header />
        <MainContents />
        <Footer />
      </Cluster>
    </main>
  );
};

export default Home;
