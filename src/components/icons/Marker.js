import React from "react"

export default ({ width, height, fillColor }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || "12"}
    height={height || "15"}
    viewBox="0 0 12 15">
    <path
      fill={fillColor || "#FFF"}
      d="M5.70000003,26.9 C5.87777781,27.0333333 6.12222226,27.0333333 6.30000004,26.9 C6.53500004,26.725 12.0000001,22.57 12.0000001,17.9999999 C12,14.6862915 9.31370852,12 6.00000004,12 C2.68629155,12 4.93781046e-08,14.6862915 0,17.9999999 C0,22.57 5.46500003,26.725 5.70000003,26.9 Z M2.50000001,17.9999999 C2.50000001,16.0670033 4.0670034,14.4999999 6.00000004,14.4999999 C7.93299667,14.4999999 9.50000006,16.0670033 9.50000006,17.9999999 C9.50000006,19.9329966 7.93299667,21.5 6.00000004,21.5 C4.0670034,21.5 2.50000001,19.9329966 2.50000001,17.9999999 Z"
      transform="translate(0 -12)"
    />
  </svg>
)
