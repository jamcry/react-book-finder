import React from "react";

function LoadingSpinner(props) {
  return (
    <div className="spinner-border p-2" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export default LoadingSpinner;
