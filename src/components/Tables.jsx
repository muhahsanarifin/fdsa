import React, { useState } from "react";
import { th } from "../helpers/table";
import * as event from "../helpers/events";
import * as timer from "../helpers/timer";
import { Icon } from "@iconify/react";
import * as Button from "./Button";
import { useStoreDispatch, useStoreActions } from "easy-peasy";
import actions from "../easy-peasy/models/actions";

export const Main = ({ data }) => {
  const dispatch = useStoreDispatch();
  // const { edit } = useStoreActions((actions) => actions?.confirmation);
  const [activeTooltip, setActiveTooltip] = useState("");

  const handleCopy = async (link) => {
    try {
      const copy = await event.clibBoard(link);

      if (copy) {
        setActiveTooltip(copy);
      }
    } catch (error) {
      console.error(error.message);
    } finally {
      setTimeout(() => {
        setActiveTooltip("");
      }, 2000);
    }
  };

  const handleEdit = (note, index) => {
    // console.log("Note Edit: ", note);
    // console.log("Idx Edit: ", index);

    const idx = { idx: index };

    const data = { ...note, ...idx };

    dispatch(
      actions.confirmationEditNoteThunk({
        data: data,
        isEmpty: false,
      })
    );
  };

  const handleDelete = (id) => {
    const notes = data.filter((el) => el.id !== id);

    if (data.length === 1) {
      const emptyNotes = {
        data: [],
        isEmpty: true,
      };
      dispatch(actions.deleteNoteThunk(emptyNotes));
    }

    dispatch(
      actions.deleteNoteThunk({
        data: notes,
        isEmpty: false,
      })
    );
  };

  return (
    <>
      <table className="table table-sm">
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
              <td>{timer.date(el.publish)}</td>
              <td
                onDoubleClick={() => handleCopy(el.link)}
                className="cursor-pointer"
              >
                {activeTooltip === el.link ? (
                  <div
                    className="tooltip tooltip-open"
                    data-tip={`Copied ${activeTooltip}`}
                  >
                    <p>{el.link}</p>
                  </div>
                ) : (
                  el.link
                )}
              </td>
              <td>{el.description}</td>
              <td className="flex gap-x-1">
                <Button.DelEdit
                  onTitle={
                    <Icon
                      icon="ic:outline-edit"
                      width="18"
                      height="18"
                      className="cursor-pointer"
                    />
                  }
                  setDelEdit={() => handleEdit(el, idx)}
                />
                <Button.DelEdit
                  onTitle={
                    <Icon
                      icon="ic:outline-delete"
                      width="18"
                      height="18"
                      className="cursor-pointer"
                    />
                  }
                  setDelEdit={() => handleDelete(el.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
