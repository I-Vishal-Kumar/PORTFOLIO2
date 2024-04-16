import React from "react";

export default function Loading() {
  return (
    <div className="h-[100%]  flex justify-center items-center w-screen absolute top-0 left-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        width="56"
        className="animate-spin"
        height="56"
      >
        <path
          fill="#76ffe5"
          d="M32 12.5c-1.7 0-3-1.3-3-3V4c0-1.7 1.3-3 3-3s3 1.3 3 3v5.5c0 1.6-1.3 3-3 3z"
          className="color76FFE5 svgShape"
        ></path>
        <path
          fill="#0dbfba"
          d="M32 63c-1.7 0-3-1.3-3-3v-5.5c0-1.7 1.3-3 3-3s3 1.3 3 3V60c0 1.7-1.3 3-3 3z"
          className="color0DBFBA svgShape"
        ></path>
        <path
          fill="#bbfff2"
          d="M20.7 15.5c-1 0-2-.5-2.6-1.5l-2.7-4.7c-.8-1.4-.3-3.3 1.1-4.1 1.4-.8 3.3-.3 4.1 1.1l2.7 4.7c.8 1.4.3 3.3-1.1 4.1-.4.2-1 .4-1.5.4z"
          className="colorBBFFF2 svgShape"
        ></path>
        <path
          fill="#1bceb8"
          d="M46 59.2c-1 0-2-.5-2.6-1.5L40.7 53c-.8-1.4-.3-3.3 1.1-4.1 1.4-.8 3.3-.3 4.1 1.1l2.7 4.7c.8 1.4.3 3.3-1.1 4.1-.5.3-1 .4-1.5.4z"
          className="color1BCEB8 svgShape"
        ></path>
        <path
          fill="#e1fff9"
          d="M12.5 23.7c-.5 0-1-.1-1.5-.4l-4.7-2.7c-1.4-.8-1.9-2.7-1.1-4.1.8-1.4 2.7-1.9 4.1-1.1l4.7 2.7c1.4.8 1.9 2.7 1.1 4.1-.6 1-1.6 1.5-2.6 1.5z"
          className="colorE1FFF9 svgShape"
        ></path>
        <path
          fill="#26dbc0"
          d="M56.3 49c-.5 0-1-.1-1.5-.4L50 45.9c-1.4-.8-1.9-2.7-1.1-4.1.8-1.4 2.7-1.9 4.1-1.1l4.7 2.7c1.4.8 1.9 2.7 1.1 4.1-.5 1-1.5 1.5-2.5 1.5z"
          className="color26DBC0 svgShape"
        ></path>
        <path
          fill="#f3fffd"
          d="M9.5 35H4c-1.7 0-3-1.3-3-3s1.3-3 3-3h5.5c1.7 0 3 1.3 3 3s-1.4 3-3 3z"
          className="colorF3FFFD svgShape"
        ></path>
        <path
          fill="#2ee5c6"
          d="M60 35h-5.5c-1.7 0-3-1.3-3-3s1.3-3 3-3H60c1.7 0 3 1.3 3 3s-1.3 3-3 3z"
          className="color2EE5C6 svgShape"
        ></path>
        <path
          fill="#11aeba"
          d="M7.7 49c-1 0-2-.5-2.6-1.5-.8-1.4-.3-3.3 1.1-4.1l4.7-2.7c1.4-.8 3.3-.3 4.1 1.1.8 1.4.3 3.3-1.1 4.1l-4.7 2.7c-.4.3-.9.4-1.5.4z"
          className="color11AEBA svgShape"
        ></path>
        <path
          fill="#3bedcb"
          d="M51.5 23.7c-1 0-2-.5-2.6-1.5-.8-1.4-.3-3.3 1.1-4.1l4.7-2.7c1.4-.8 3.3-.3 4.1 1.1.8 1.4.3 3.3-1.1 4.1L53 23.3c-.5.3-1 .4-1.5.4z"
          className="color3BEDCB svgShape"
        ></path>
        <path
          fill="#0fb8bc"
          d="M18 59.2c-.5 0-1-.1-1.5-.4-1.4-.8-1.9-2.7-1.1-4.1l2.7-4.7c.8-1.4 2.7-1.9 4.1-1.1 1.4.8 1.9 2.7 1.1 4.1l-2.7 4.7c-.6 1-1.6 1.5-2.6 1.5z"
          className="color0FB8BC svgShape"
        ></path>
        <path
          fill="#57f7d8"
          d="M43.3 15.5c-.5 0-1-.1-1.5-.4-1.4-.8-1.9-2.7-1.1-4.1l2.7-4.7c.8-1.4 2.7-1.9 4.1-1.1 1.4.8 1.9 2.7 1.1 4.1L45.9 14c-.6.9-1.6 1.5-2.6 1.5z"
          className="color57F7D8 svgShape"
        ></path>
      </svg>
    </div>
  );
}
