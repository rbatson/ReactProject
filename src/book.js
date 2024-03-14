import React from "react";

const Book = ({ img, title, author }) => {
  // attribute, eventHandler
  const complexExample = (author) => {
    console.log(author);
  };
  return (
    <article className="book">
      <img src={img} />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

export default Book;
