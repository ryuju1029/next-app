"use client";
import { useEffect, useState } from "react";
import { Header } from "./components/Header/page";
import { Footer } from "./components/Footer/page";
import { Cluster } from "./components/Cluster";
import { MainContents } from "./components/MainContents/page";
import { New } from "../app/articles/new/page";
import { getAllArticles } from "../data/blogAPI";
import { Aritcle } from "@/data/types";

export const Home = () => {
  const [articles, setArticles] = useState<Aritcle[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchArticles = async () => {
      const result = await getAllArticles();
      setArticles(result);
    };
    fetchArticles();
  }, []);

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
