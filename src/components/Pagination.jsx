import React from "react";

const Pagination = ({
  setPreviousPage,
  setNextPage,
  onPage,
  onCurrentPage,
  onTotalPage,
}) => {
  return (
    <div className="join ml-auto">
      <button
        className={
          onCurrentPage === 1
            ? "join-item btn btn-sm text-xs btn-disabled"
            : "join-item btn btn-sm text-xs"
        }
        onClick={setPreviousPage}
      >
        «
      </button>
      <button className="join-item btn btn-sm text-xs">{onPage}</button>
      <button
        className={
          onCurrentPage === onTotalPage
            ? "join-item btn btn-sm text-xs btn-disabled"
            : "join-item btn btn-sm text-xs"
        }
        onClick={setNextPage}
      >
        »
      </button>
    </div>
  );
};

export default Pagination;
