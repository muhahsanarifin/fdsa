export const Clear = ({ onTitle, setHandleClear }) => {
  return (
    <button
      className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
      onClick={setHandleClear}
    >
      {onTitle}
    </button>
  );
};

export const Save = ({ onTitle, onDisable }) => {
  return (
    <button
      className={
        onDisable
          ? "disabled:opacity-75 cursor-not-allowed px-8 py-2.5 leading-5 duration-300 transform bg-gray-200 rounded-md"
          : "px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
      }
    >
      {onTitle}
    </button>
  );
};

export const deleteAll = ({ onTitle, setHandleDeleteAll }) => {
  return (
    <button
      className="duration-300 transform text-gray-700 hover:text-gray-800 text-[12px] sm:text-xs"
      onClick={setHandleDeleteAll}
    >
      {onTitle}
    </button>
  );
};

// Del = Delete, Edit = Edit
export const DelEdit = ({ onTitle, setDelEdit }) => {
  return <button onClick={setDelEdit}>{onTitle}</button>;
};

export const Convert = ({ onTitle, setHandleConvert }) => {
  return (
    <button
      onClick={setHandleConvert}
      className="text-gray-700 hover:text-gray-800 text-[12px] sm:text-xs"
    >
      {onTitle}
    </button>
  );
};
