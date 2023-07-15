import React, { useState, useEffect } from "react";
import { th } from "../helpers/table";
import * as event from "../helpers/events";
import * as timer from "../helpers/timer";
import { Icon } from "@iconify/react";
import * as Button from "./Button";
import { useStoreDispatch, useStoreActions } from "easy-peasy";
import actions from "../easy-peasy/models/actions";
import { JsonViewer } from "@textea/json-viewer";

export const Main = ({ data, otherData, setCurrentPage }) => {
  const dispatch = useStoreDispatch();
  // const { edit } = useStoreActions((actions) => actions?.confirmation);
  const [activeTooltip, setActiveTooltip] = useState("");

  const handleCopy = async (link, id) => {
    try {
      const copy = await event.clibBoard(link);

      if (copy) {
        setActiveTooltip([copy, id]);
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
    const notes = otherData.filter((el) => el.id !== id);

    if (otherData.length === 1) {
      const emptyNotes = {
        data: [],
        isEmpty: true,
      };

      dispatch(actions.deleteNoteThunk(emptyNotes));

      const emptyOtherNotes = {
        currentPosts: [],
        isEmpty: true,
        meta: {
          currentPage: 1,
          totalPage: 0,
          totalPost: 0,
        },
      };

      dispatch(actions.deleteNoteCurrentPostThunk(emptyOtherNotes));
      return;
    }

    dispatch(
      actions.deleteNoteThunk({
        data: notes,
        isEmpty: false,
      })
    );

    const otherNotes = data.currentPosts.filter((el) => el.id !== id);

    dispatch(
      actions.deleteNoteCurrentPostThunk({
        currentPost: otherNotes,
        isEmpty: data.isEmpty,
        meta: {
          currentPage: data.meta.currentPage,
          totalPages: data.meta.totalPages,
          totalPosts: data.meta.totalPosts,
        },
      })
    );
  };

  useEffect(() => {
    if (data.meta.currentPage === 1 || data.currentPosts?.length < 1)
      return setCurrentPage(1);
    if (data.currentPosts?.length < 1)
      setCurrentPage(data.meta.currentPage - 1);
  }, [data]);

  return (
    <>
      <table className="table table-sm">
        {/* head */}
        <thead>
          <tr>
            {th.map((el, idx) => (
              <th key={idx}>{el}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* row */}
          {data.currentPosts?.map((el, idx) => (
            <tr key={idx} className="odd:bg-white even:bg-slate-50">
              <th>{el.id}</th>
              <td>{el.author}</td>
              <td>{timer.date(el.publish)}</td>
              <td
                onDoubleClick={() => handleCopy(el.link, el.id)}
                className="cursor-pointer"
              >
                {activeTooltip[0] === el.link && activeTooltip[1] === el.id ? (
                  <div
                    className="tooltip tooltip-open"
                    data-tip={`Copied ${activeTooltip[0]}`}
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

export const JSON = ({ data }) => {
  return <JsonViewer value={data} />;
};
