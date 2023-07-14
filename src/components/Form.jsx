import React, { useEffect, useState } from "react";
import * as validate from "../helpers/validation";
import * as Button from "../components/Button";
import { useStoreDispatch, useStoreState, useStoreActions } from "easy-peasy";
import actions from "../easy-peasy/models/actions";
import * as create from "../helpers/id";
import * as timer from "../helpers/timer";

export const Json = () => {
  const dispatch = useStoreDispatch();
  const { data, isEmpty } = useStoreState((state) => state.notes?.get);
  const result = useStoreState((state) => state.notes?.data);
  // Confirmation state
  const edit = useStoreState((state) => state.confirmation?.edit);

  // const { addNote } = useStoreActions((actions) => actions);
  const elForm = document.getElementById("form");

  const [body, setBody] = useState({
    author: "",
    publish: "",
    link: "",
    description: "",
  });

  // Input
  const handleInput = (e) => {
    const { name, value } = e.target;
    setBody({ ...body, [name]: value });
  };

  // Edit input
  const handleEditInput = (e) => {
    const { name, value } = e.target;
    setBody({ ...body, [name]: value });
  };

  useEffect(() => {
    const { data } = edit;

    !edit.isEmpty &&
      setBody({
        author: data.author,
        publish: timer.convertDate(data.publish),
        link: data.link,
        description: data.description,
      });
  }, [edit]);

  // Handle save
  const handleSave = (e) => {
    e.preventDefault();

    // Validate body
    const validateBody = validate.body(body);
    if (validateBody) return console.error(validateBody);

    // Body
    const { author, publish, link, description } = body;

    const note = {
      id: isEmpty ? 1 : create.Id(data) + 1,
      author: author,
      publish: Date.parse(publish),
      link: link,
      description: description,
    };

    // addNote(note);

    dispatch(actions.addNotesThunk([...data, note]));

    // Reset form
    elForm.reset();

    // Reset body
    setBody({
      author: "",
      publish: "",
      link: "",
      description: "",
    });
  };

  // Handle save edit
  const handleSaveEdit = (e) => {
    e.preventDefault();

    // Body
    const { author, publish, link, description } = body;

    const note = {
      id: edit.data.id,
      author: author,
      publish: Date.parse(publish),
      link: link,
      description: description,
    };

    // Data
    data.splice(edit.data.id - 1, 1, note);

    dispatch(actions.editNoteThunk(data));

    // Result
    const { currentPosts, isEmpty, meta } = result;

    currentPosts.splice(edit.data.idx, 1, note);

    dispatch(
      actions.editNoteCurrentPostThunk({
        currentPosts: currentPosts,
        isEmpty: isEmpty,
        meta: {
          currentPage: meta.currentPage,
          totalPages: meta.totalPages,
          totalPosts: meta.totalPosts,
        },
      })
    );

    dispatch(
      actions.confirmationEditNoteThunk({
        data: {},
        isEmpty: true,
      })
    );

    // Reset body
    setBody({
      author: "",
      publish: "",
      link: "",
      description: "",
    });
  };

  // Handle clear input
  const handleClear = () => {
    // Reset form
    elForm.reset();

    // Reset body
    setBody({
      author: "",
      publish: "",
      link: "",
      description: "",
    });

    // Reset Confirmation note
    !edit.isEmpty &&
      dispatch(
        actions.confirmationEditNoteThunk({
          data: {},
          isEmpty: true,
        })
      );
  };

  return (
    <section className="w-[50%] sm:w-auto lg:w-full mx-auto p-6 rounded-md shadow-md bg-base-200">
      <h2 className="text-lg font-semibold capitalize text-gray-700">
        Easy-Peasy Notes
      </h2>

      <form onSubmit={!edit.isEmpty ? handleSaveEdit : handleSave} id="form">
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label className="text-gray-700" htmlFor="author">
              Author
            </label>
            <input
              name="author"
              id="author"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              onChange={(e) => {
                !edit.isEmpty ? handleEditInput(e) : handleInput(e);
              }}
              value={body.author}
            />
          </div>

          <div>
            <label className="text-gray-700" htmlFor="publish">
              Publish
            </label>
            <input
              name="publish"
              id="publish"
              type="date"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              onChange={(e) => {
                !edit.isEmpty ? handleEditInput(e) : handleInput(e);
              }}
              value={body.publish}
            />
          </div>

          <div>
            <label className="text-gray-700" htmlFor="link">
              Link
            </label>
            <input
              name="link"
              id="link"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              onChange={(e) => {
                !edit.isEmpty ? handleEditInput(e) : handleInput(e);
              }}
              value={body.link}
            />
          </div>

          <div>
            <label className="text-gray-700" htmlFor="description">
              Description
            </label>
            <input
              name="description"
              id="description"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              onChange={(e) => {
                !edit.isEmpty ? handleEditInput(e) : handleInput(e);
              }}
              value={body.description}
            />
          </div>
        </div>

        <div className="flex justify-end mt-6 gap-x-2">
          {validate.clear(body) && (
            <Button.Clear onTitle={"Clear"} setHandleClear={handleClear} />
          )}
          <Button.Save onTitle={"Save"} onDisable={validate.save(body)} />
        </div>
      </form>
    </section>
  );
};
