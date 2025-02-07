/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { POSTS_PER_PAGE, URL } from "./constants";

export const ctx = createContext({
  posts: [],
  currPage: 1,
  visiblePosts: [],
  setCurrPage: () => {},
  filterVisiblePosts: (pageNumber, posts) => {},
  shiftPosts: (removeId, pageNum) => {},
  pageCount: 1,
});

export function ContextProvder({ children }) {
  const [posts, setPosts] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  function shiftPosts(removeId, pageNum) {
    const indexToRemove = posts.findIndex((post) => post.id === removeId);
    setPosts((prevPosts) => {
      prevPosts.splice(indexToRemove, 1);
      filterVisiblePosts(pageNum, prevPosts);
      return [...posts];
    });

    setTotalPosts((prevTotalPost) => prevTotalPost--);

    setPageCount(() => {
      let pages = totalPosts / POSTS_PER_PAGE;
      const areRemainderPosts = totalPosts % POSTS_PER_PAGE > 0;
      if (areRemainderPosts) pages++;
      return pages;
    });
  }

  function filterVisiblePosts(pageNumber, posts) {
    const postStart = POSTS_PER_PAGE * (pageNumber - 1);
    const postsTill = POSTS_PER_PAGE * pageNumber;

    const newVisPosts = [];
    for (let i = postStart; i < postsTill; i++) {
      newVisPosts.push(posts[i]);
    }
    setVisiblePosts(newVisPosts);
  }

  useEffect(() => {
    fetch(URL)
      .then((res) => {
        if (res.status === 400) {
          throw new Error("Error");
        }
        return res.json();
      })
      .then((res) => {
        setTotalPosts(res.length);
        setPosts(res);
        filterVisiblePosts(currPage, res);
        setPageCount(res.length / POSTS_PER_PAGE);
      })
      .catch(console.log);
  }, []);

  return (
    <ctx.Provider
      value={{
        posts,
        visiblePosts,
        shiftPosts,
        currPage,
        setCurrPage,
        filterVisiblePosts,
        pageCount,
      }}
    >
      {children}
    </ctx.Provider>
  );
}
