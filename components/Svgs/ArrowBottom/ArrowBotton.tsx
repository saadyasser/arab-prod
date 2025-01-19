import React from "react";

const ArrowBottom = (props: any) => {
  return (
    <svg
      width="12"
      height="10"
      viewBox="0 0 12 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6 9.4458L0.803848 0.445801L11.1962 0.445801L6 9.4458Z"
        fill={props.fill || "white"}
      />
    </svg>
  );
};

export default ArrowBottom;
