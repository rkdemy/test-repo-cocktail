import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Error = () => {
  return (
    <div>
      <Navbar />
      <section className="error-page section">
        <div className="error-container">
          <h2>Oops! This is a dead end</h2>
          <Link to="/" className="btn btn-primary">
            back home
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Error;
