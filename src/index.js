import React from "react";
import { createRoot } from "react-dom/client";
import Book from "./book.js";
import { data } from "./books.js";
import "./index.css";

const container = document.getElementById("app");
const root = createRoot(container);

function BookList() {
  return (
    <section className="booklist">
      {data.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

root.render(<BookList />);
