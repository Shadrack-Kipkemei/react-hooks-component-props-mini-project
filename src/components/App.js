import React from "react";
import blogData from "../data/blog";
import Header from '../components/Header/Header'
import About from "./About/About";
import ArticleList from "./ArticleList/ArticleList";

console.log(blogData);

function App() {
  const {name, image, about, posts} = blogData; 
  return (
    <div className="App">
      <Header name={name} />
      <About image={image} about={about} />
      <ArticleList posts={posts} />
      
    </div>
  );
}

export default App;
