import React from "react";
import "./App.scss";
import { PageContextProvider } from "./contexts/pageContext";
import { PostsContextProvider } from "./contexts/postsContext/index";
import { Posts } from "./pages/posts";

const App: React.FC = () => {
  return (
    <PageContextProvider>
      <PostsContextProvider>
        <Posts />
      </PostsContextProvider>
    </PageContextProvider>
  );
};

export default App;
