import React from "react";
import { useNavigate } from "react-router-dom";

import * as content from "../utils/contents";

const Layout = () => {
  const navigate = useNavigate();
  const { title, description } = content.layout;

  return (
    <div className="hero h-[30.375rem] my-8">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="src/assets/logo-easy-peasy.png"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="py-6">{description}</p>
          <button className="btn glass" onClick={() => navigate("/example")}>
            Example
          </button>
        </div>
      </div>
    </div>
  );
};

export default Layout;
