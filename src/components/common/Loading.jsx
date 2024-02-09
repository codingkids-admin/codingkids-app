import React from "react";

const Loading = () => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column py-4">
      <span className="spinner-grow text-success" aria-hidden="true"></span>
      <span className={`loading_label`} role="status">
        Wait a sec
      </span>
    </div>
  );
};

export default Loading;
