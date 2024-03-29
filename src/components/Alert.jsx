import { Icon } from "@iconify/react";

export const Info = ({setHandleCloseAlert}) => {
  return (
    <div className="alert w-[50vw] my-5 mx-auto sm:w-auto sm:flex lg:w-auto">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="stroke-info shrink-0 w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
      <span className="text-sm font-semibold sm:text-[10px]">
        <p>
          Use{" "}
          <a
            href="https://github.com/reduxjs/redux-devtools"
            className="text-[#3ABFF8]"
          >
            Redux Devtools
          </a>{" "}
          for debugging state changes.
        </p>
      </span>
      <div className="flex">
        <button onClick={setHandleCloseAlert}>
          <Icon icon="ion:close" width="24" />
        </button>
      </div>
    </div>
  );
};
