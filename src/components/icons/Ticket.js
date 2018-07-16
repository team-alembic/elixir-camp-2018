import React from "react"

export default ({ width, height, fillColor }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || "22"}
    height={height || "22"}
    viewBox={`0 0 ${width || 22} ${height || 22}`}>
    <g fill="#FFF">
      <path d="M2.98222222,15.8644444 C3.17777778,16.06 3.49555556,16.06 3.66666667,15.8644444 C4.00888889,15.5222222 4.44888889,15.3511111 4.91333333,15.3511111 C5.37777778,15.3511111 5.81777778,15.5222222 6.16,15.8644444 C6.84444444,16.5488889 6.84444444,17.6488889 6.16,18.3333333 C5.96444444,18.5288889 5.96444444,18.8222222 6.16,19.0177778 L8.77555556,21.6333333 C8.87333333,21.7311111 8.99555556,21.78 9.11777778,21.78 C9.24,21.78 9.36222222,21.7311111 9.46,21.6333333 L21.6577778,9.43555556 C21.8533333,9.24 21.8533333,8.94666667 21.6577778,8.75111111 L19.0177778,6.13555556 C18.92,6.03777778 18.7977778,5.98888889 18.6511111,5.98888889 C18.5288889,5.98888889 18.3822222,6.03777778 18.3088889,6.13555556 L18.2844444,6.18444444 C18.2844444,6.18444444 18.26,6.20888889 18.26,6.20888889 C17.9177778,6.55111111 17.4777778,6.72222222 17.0133333,6.72222222 C16.5488889,6.72222222 16.1088889,6.55111111 15.7666667,6.20888889 C15.4244444,5.86666667 15.2533333,5.42666667 15.2533333,4.96222222 C15.2533333,4.49777778 15.4244444,4.05777778 15.7666667,3.71555556 C15.7666667,3.71555556 15.7911111,3.69111111 15.7911111,3.69111111 L15.8155556,3.66666667 C15.9133333,3.56888889 15.9622222,3.44666667 15.9866667,3.32444444 C16.0111111,3.20222222 15.9377778,3.05555556 15.84,2.95777778 L13.2244444,0.342222222 C13.0288889,0.146666667 12.7355556,0.146666667 12.54,0.342222222 L0.342222222,12.54 C0.146666667,12.7355556 0.146666667,13.0288889 0.342222222,13.2244444 L2.98222222,15.8644444 Z M9.38666667,4.88888889 L9.65555556,5.15777778 C9.75333333,5.25555556 9.87555556,5.30444444 9.99777778,5.30444444 C10.12,5.30444444 10.2422222,5.25555556 10.34,5.15777778 C10.5355556,4.96222222 10.5355556,4.66888889 10.34,4.47333333 L10.0711111,4.20444444 L12.8822222,1.39333333 L14.8377778,3.34888889 C14.0311111,4.42444444 14.1044444,5.94 15.0822222,6.91777778 C16.06,7.89555556 17.6,7.96888889 18.6511111,7.16222222 L20.6066667,9.11777778 L17.82,11.9044444 L17.5511111,11.6355556 C17.3555556,11.44 17.0622222,11.44 16.8666667,11.6355556 C16.6711111,11.8311111 16.6711111,12.1244444 16.8666667,12.32 L17.1355556,12.5888889 L9.11777778,20.6066667 L7.16222222,18.6511111 C7.89555556,17.6 7.79777778,16.1088889 6.84444444,15.1555556 C5.89111111,14.2022222 4.42444444,14.1044444 3.34888889,14.8377778 L1.39333333,12.8822222 L9.38666667,4.88888889 Z" />
      <path d="M12.4422222 7.92C12.54 8.01777778 12.6622222 8.06666667 12.7844444 8.06666667 12.9066667 8.06666667 13.0288889 8.01777778 13.1266667 7.92 13.3222222 7.72444444 13.3222222 7.43111111 13.1266667 7.23555556L11.9777778 6.08666667C11.7822222 5.89111111 11.4888889 5.89111111 11.2933333 6.08666667 11.0977778 6.28222222 11.0977778 6.57555556 11.2933333 6.77111111L12.4422222 7.92zM15.2288889 10.7066667C15.3266667 10.8044444 15.4488889 10.8533333 15.5711111 10.8533333 15.6933333 10.8533333 15.8155556 10.8044444 15.9133333 10.7066667 16.1088889 10.5111111 16.1088889 10.2177778 15.9133333 10.0222222L14.7644444 8.87333333C14.5688889 8.67777778 14.2755556 8.67777778 14.08 8.87333333 13.8844444 9.06888889 13.8844444 9.36222222 14.08 9.55777778L15.2288889 10.7066667z" />
      <polygon points="9.142 13.762 10.511 15.693 11.22 13.444 13.469 12.736 11.538 11.367 11.562 9.02 9.68 10.413 7.431 9.656 8.189 11.904 6.771 13.787" />
    </g>
  </svg>
)
