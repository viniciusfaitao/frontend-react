import React, { createContext, useEffect, useState, useContext } from "react";
import axios from "axios";
import { PageContext } from "../pageContext/index";

const token =
  "81aa298b081e3d70e4fc02630bea86040318471727b0d5cceaac5cb7b44ba430";
let actualPage;

export const PostsContext = createContext();

export const PostsContextProvider = (props) => {
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPosts] = useState(0);
  const { page } = useContext(PageContext);

  const fetchData = async () => {
    const result = await GetPosts();
    setPosts(result.data.data);
    setTotalPosts(result.data.meta.pagination.pages);
  };

  useEffect(() => {
    if (page !== actualPage) {
      actualPage = page;
      fetchData();
    }
    if (posts <= 0) {
      actualPage = page;
      fetchData();
    }
  });

  return (
    <PostsContext.Provider value={{ posts, totalPages }}>
      {props.children}
    </PostsContext.Provider>
  );
};

const GetPosts = () => {
  try {
    const response = axios.get(
      `https://gorest.co.in/public-api/posts?_format=json&access-token=${token}&page=${actualPage}`
    );
    return response;
  } catch (err) {
    console.log(err);
  }
};
