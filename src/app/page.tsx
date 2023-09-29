"use client";

import { useState } from "react";
import { Header } from "./components/Header/page";
import { Footer } from "./components/Footer/page";
import { Cluster } from "./components/Cluster";
import { MainContents } from "./components/MainContents/page";
import { New } from "../app/articles/new/page";

export const Home = () => {
  const [open, setOpen] = useState(false);

  return (
    <main>
      <Cluster>
        <Header setOpen={setOpen} />
        <MainContents />
        <New open={open} setOpen={setOpen} />
        <Footer />
      </Cluster>
    </main>
  );
};

export default Home;
