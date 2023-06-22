import React, { useState, useEffect } from "react";
import { useStoreState, useStoreDispatch } from "easy-peasy";
import { useNavigate } from "react-router-dom";
import * as content from "../utils/contents";
import * as Form from "./Form";
import * as Table from "./Tables";
import * as Button from "./Button";
import actions from "../easy-peasy/models/actions";
import Pagination from "../components/Pagination";
import metaDataPagination from "../helpers/pagination";

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
  const dispatch = useStoreDispatch();
  // const { notes } = useStoreState((state) => state);
  const { data, isEmpty } = useStoreState((state) => state.notes?.get);
  const result = useStoreState((state) => state.notes?.data);
  const [convertToJSON, setConvertToJSON] = useState(false);

  // Pagination
  const [currentPage, setCurrenPage] = useState(1);
  const [postsPerPage, setPostsPerpage] = useState(5);

  // Delete notes
  const handleDeleteNotes = () => {
    const existNotes = data.length > 0 && [];

    dispatch(actions.deleteNotesThunk(existNotes));
  };

  const handleConvert = () => {
    setConvertToJSON(!convertToJSON);
  };

  // Pagination
  // const lastPostIdx = currentPage * postsPerPage;
  // console.log("Last Post Index: ", lastPostIdx);

  // const fistPostIdx = lastPostIdx - postsPerPage;
  // console.log("First Post Index: ", fistPostIdx);

  // const currentPosts = data.slice(fistPostIdx, lastPostIdx);
  // console.log("Current Posts: ", currentPosts);

  const meta = metaDataPagination(currentPage, postsPerPage);

  useEffect(() => {
    const currentPosts = data.slice(
      meta.firstPostIdx(postsPerPage),
      meta.lastPostIdx
    );

    dispatch(
      actions.getNotesThunk({
        currentPosts: currentPosts,
        isEmpty: false,
        meta: {
          currentPage: currentPage,
          totalPages: Math.ceil(data.length / postsPerPage),
          totalPosts: data.length,
        },
      })
    );
  }, [data, currentPage]);

  return (
    <div className=" my-5 mx-auto w-[50vw]">
      {/* Form section */}
      <div className="flex">
        <Form.Json />
      </div>
      {/* Result section */}
      {!isEmpty && (
        <div className="my-6">
          <div className="collapse bg-base-200">
            <input type="checkbox" className="peer" />
            <div className="collapse-title font-semibold flex items-center">
              <p>Click this to show/hide result</p>
              <div className="flex items-center ml-auto z-50">
                <Button.Convert
                  onTitle={convertToJSON ? "Main Result" : "Convert to JSON"}
                  setHandleConvert={handleConvert}
                />
                <Button.deleteAll
                  onTitle={"Delete all"}
                  setHandleDeleteAll={handleDeleteNotes}
                />
              </div>
            </div>
            <div className="collapse-content overflow-x-auto ">
              {convertToJSON ? (
                <Table.JSON data={result.currentPosts} />
              ) : (
                <Table.Main data={result.currentPosts} />
              )}
              {!isEmpty && (
                <div className="my-6 flex">
                  <Pagination
                    setPreviousPage={() =>
                      setCurrenPage(result.meta.currentPage - 1)
                    }
                    setNextPage={() =>
                      setCurrenPage(result.meta.currentPage + 1)
                    }
                    onPage={result.meta.currentPage}
                    onCurrentPage={result.meta.currentPage}
                    onTotalPage={result.meta.totalPages}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export { Home, Example };
