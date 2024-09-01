import React from "react";

const DownArrowIcon = (props: React.HTMLAttributes<HTMLOrSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={71}
      viewBox="0 0 18 71"
      fill="none"
      {...props}
    >
      <path
        d="M10.5 2C10.5 1.17157 9.82843 0.5 9 0.5C8.17157 0.5 7.5 1.17157 7.5 2L10.5 2ZM9 71L17.6603 56L0.339743 56L9 71ZM7.5 2L7.5 57.5L10.5 57.5L10.5 2L7.5 2Z"
        fill="url(#paint0_linear_1173_2078)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1173_2078"
          x1="8.5"
          y1={2}
          x2="8.50007"
          y2={71}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7AFFD7" />
          <stop offset={1} stopColor="#00FFB2" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default DownArrowIcon;
