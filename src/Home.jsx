import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Book Library</h1>
      <Link to="/add-book">
        <button style={{ padding: "10px", fontSize: "16px" }}>Add Book</button>
      </Link>
      <div className="book-list">
        {/* Render BookCard components here */}
      </div>
    </div>
  );
};

export default Home;
