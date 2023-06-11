import React from "react";
import { useNavigate } from "react-router-dom";

export const Breadcrumbs = ({ onELements }) => {
  const navigate = useNavigate();

  return (
    <div className="text-sm breadcrumbs my-5 mx-auto w-[50vw]">
      <ul>
        {onELements?.map((element, idx) => (
          <li
            key={idx}
            onClick={() =>
              navigate(`${element === "Home" ? "/" : "/" + element}`)
            }
            className={`${
              element === "Home"
                ? "cursor-pointer"
                : "disabled:opacity-75 cursor-not-allowed"
            } font-semibold`}
          >
            {element}
          </li>
        ))}
      </ul>
    </div>
  );
};
