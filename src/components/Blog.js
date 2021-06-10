import React from "react";
import "../assets/styles/blog.css";

function Blog() {
  return (
    <div className="container">
      <h1>From Our Recent Posts</h1>
      <div className="wrapper">
        <div className="card">
          <img src="https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
          <h3 className="card-title">CARD TITLE</h3>
          <p className="card-content">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old.</p>
          <button className="card-btn">READ MORE</button>
        </div>
        <div className="card">
        <img src="https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
          <h3 className="card-title">CARD TITLE</h3>
          <p className="card-content">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old.</p>
          <button className="card-btn">READ MORE</button>
        </div>
        <div className="card">
        <img src="https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
          <h3 className="card-title">CARD TITLE</h3>
          <p className="card-content">Contrary to popular belief,
          Lorem Ipsum is not simply random text. It has roots in a piece of
          classNameical Latin literature from 45 BC, making it over 2000 years old.</p>
          <button className="card-btn">READ MORE</button>
        </div>
      </div>
    </div>
  );
}

export default Blog;
