import { Aritcle } from "./types";

export const getAllArticles = async () => {
  const res = await fetch("http://localhost:5000/posts", {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};
