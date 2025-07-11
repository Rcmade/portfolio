import React from "react";

const LinesIcon = (props: React.HTMLAttributes<HTMLOrSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={"1em"}
      height={"1em"}
      viewBox="0 0 731 186"
      fill="none"
    >
      <line
        x1={364}
        y1="0.994536"
        x2="365.011"
        y2="185.994"
        stroke="#46DEC4"
        strokeWidth={2}
      />
      <g clipPath="url(#clip0_1173_1817)">
        <path
          d="M224.222 99.5C203.67 99.5 187.23 94.3312 184.996 86.45C182.761 78.5687 184.996 4 184.996 4"
          stroke="#FFC635"
          strokeWidth={2}
        />
        <path
          d="M363.761 195.579C363.761 195.579 370.81 133.039 354.453 114.158C343.681 101.724 337.6 99.7896 316.812 99.7896C316.812 99.7896 61.5647 99.7896 40.7774 99.7896C19.9902 99.7896 5.3962 93.2041 3.13638 85.4212C0.876559 77.6383 3.13638 4.00016 3.13638 4.00016"
          stroke="url(#paint0_linear_1173_1817)"
          strokeWidth={2}
        />
      </g>
      <g clipPath="url(#clip1_1173_1817)">
        <path
          d="M366.247 195.579C366.247 195.579 359.179 133.039 375.581 114.158C386.382 101.724 392.479 99.7896 413.324 99.7896C413.324 99.7896 669.267 99.7896 690.111 99.7896C710.955 99.7896 725.588 93.2041 727.854 85.4212C730.12 77.6383 727.854 4.00016 727.854 4.00016"
          stroke="url(#paint1_linear_1173_1817)"
          strokeWidth={2}
        />
        <path
          d="M500.749 99.5C521.301 99.5 537.74 94.3312 539.975 86.45C542.209 78.5687 539.975 4 539.975 4"
          stroke="#FFC635"
          strokeWidth={2}
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_1173_1817"
          x1="3.13572"
          y1="99.7897"
          x2="354.452"
          y2="99.7897"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E5484D" />
          <stop offset="0.5" stopColor="#FFC634" />
          <stop offset={1} stopColor="#45DEC4" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1173_1817"
          x1="727.855"
          y1="99.7897"
          x2="375.581"
          y2="99.7897"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E5484D" />
          <stop offset="0.5" stopColor="#FFC634" />
          <stop offset={1} stopColor="#45DEC4" />
        </linearGradient>
        <clipPath id="clip0_1173_1817">
          <rect
            width={367}
            height={182}
            fill="white"
            transform="matrix(-1 0 0 -1 367 186)"
          />
        </clipPath>
        <clipPath id="clip1_1173_1817">
          <rect
            width={368}
            height={182}
            fill="white"
            transform="matrix(1 0 0 -1 363 186)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default LinesIcon;
