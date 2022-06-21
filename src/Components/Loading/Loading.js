import React from "react";
import HashLoader from "react-spinners/HashLoader";
const Loading = ({loading}) => {
  return (
    <>
      <div
        style={{ height: "100vh" }}
        className="d-flex flex-column justify-content-center align-items-center bg-dark text-white"
      >
        <HashLoader color={"#9B9B9B"} loading={loading} size={100} />
        <p className="mt-3 text-white-50 bold">Relax and Take Deep Breaths.</p>
      </div>
    </>
  );
};

export default Loading;
