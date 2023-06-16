import React from "react";
import { th } from "../helpers/table";
import * as Event from "../helpers/events";

export const Main = ({ data }) => {
  const handleCopy = async (link) => {
    const copy = await Event.clibBoard(link);
    console.log("Copy result: ", copy);
  };

  return (
    <>
      <table className="table table-xs">
        {/* head */}
        <thead className="border-2 border-solid border-purple-500">
          <tr>
            {th.map((el, idx) => (
              <th key={idx}>{el}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* row */}
          {data.map((el, idx) => (
            <tr key={idx}>
              <th>{el.id}</th>
              <td>{el.author}</td>
              <td>{el.publish}</td>
              <td
                onDoubleClick={() => handleCopy(el.link)}
                className="cursor-pointer"
              >
                {el.link}
              </td>
              <td>{el.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
