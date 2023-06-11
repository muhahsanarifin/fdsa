import React from "react";
import { useNavigate } from "react-router-dom";
import * as content from "../utils/contents";
import * as Form from "../components/Form";

const Home = () => {
  const navigate = useNavigate();
  const { title, description } = content.layout;

  return (
    <div className="hero h-[30.375rem] my-8">
      <div className="hero-content flex-col lg:flex-row">
        <img src="src/assets/logo-easy-peasy.png" className="max-w-sm" />
        <div>
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="py-6">{description}</p>
          <button
            className="btn btn-ghost"
            onClick={() => navigate("/example")}
          >
            Example
          </button>
        </div>
      </div>
    </div>
  );
};

const Example = () => {
  return (
    <div className=" my-5 mx-auto w-[50vw]">
      {/* Form section */}
      <div className="flex">
        <Form.Json />
      </div>
      {/* Result section */}
      {true && (
        <div className="my-6">
          <div className="collapse bg-base-200">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-gray-800 text-white">
              Click me to show/hide result
            </div>
            <div className="collapse-content bg-gray-800 text-white">
              <p>hello</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export { Home, Example };
