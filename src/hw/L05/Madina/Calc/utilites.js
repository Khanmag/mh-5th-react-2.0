import { Button } from "@mui/material";
import styles from "./index.modul.css";

const percentSVG = (
  <svg
    className={styles.svgHover}
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="26.312"
      y="70.6523"
      width="62"
      height="5"
      rx="2.5"
      transform="rotate(-45 26.312 70.6523)"
      fill="#78007A"
    />
    <circle
      cx="61.0002"
      cy="67"
      r="8"
      transform="rotate(-45 61.0002 67)"
      fill="#78007A"
    />
    <circle
      cx="37.3137"
      cy="34.3135"
      r="8"
      transform="rotate(-45 37.3137 34.3135)"
      fill="#78007A"
    />
  </svg>
);
const devSVG = (
  <svg
    className={styles.svgHover}
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="19" y="48" width="62" height="5" rx="2.5" fill="#78007A" />
    <circle cx="50" cy="69" r="8" fill="#78007A" />
    <circle cx="50" cy="32" r="8" fill="#78007A" />
  </svg>
);

const multiSVG = (
  <svg
    className={styles.svgHover}
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="26.312"
      y="70.6523"
      width="62"
      height="5"
      rx="2.5"
      transform="rotate(-45 26.312 70.6523)"
      fill="#78007A"
    />
    <rect
      x="69.6528"
      y="73.688"
      width="62"
      height="5"
      rx="2.5"
      transform="rotate(-135 69.6528 73.688)"
      fill="#78007A"
    />
  </svg>
);

const minusSVG = (
  <svg
    className={styles.svgHover}
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="19" y="48" width="62" height="5" rx="2.5" fill="#78007A" />
  </svg>
);

const plusSVG = (
  <svg
    className={styles.svgHover}
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="19" y="48" width="62" height="5" rx="2.5" fill="#78007A" />
    <rect
      x="47"
      y="81"
      width="62"
      height="5"
      rx="2.5"
      transform="rotate(-90 47 81)"
      fill="#78007A"
    />
  </svg>
);

const equalSVG = (
  <svg
    className={styles.svgHover}
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="19" y="60" width="62" height="5" rx="2.5" fill="#78007A" />
    <rect x="19" y="32" width="62" height="5" rx="2.5" fill="#78007A" />
  </svg>
);

const backSVG = (
  <svg
    className={styles.svgHover}
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="19.5"
      y="48.5"
      width="61"
      height="4"
      rx="2"
      fill="#78007A"
      stroke="#78007A"
    />
    <rect
      x="18.7071"
      y="49.9204"
      width="30"
      height="4"
      rx="2"
      transform="rotate(-45 18.7071 49.9204)"
      fill="#78007A"
      stroke="#78007A"
    />
    <rect
      x="39.9204"
      y="71.7489"
      width="30"
      height="4"
      rx="2"
      transform="rotate(-135 39.9204 71.7489)"
      fill="#78007A"
      stroke="#78007A"
    />
  </svg>
);

const calcButtons = [
  {
    content: "AC",
    class: "button",
  },
  {
    content: percentSVG,
  },
  {
    content: devSVG,
  },
  {
    content: multiSVG,
  },
  //
  {
    content: "7",
  },
  {
    content: "8",
  },
  {
    content: "9",
  },
  {
    content: minusSVG,
    role: "operator",
  },
  //
  {
    content: "4",
  },
  {
    content: "5",
  },
  {
    content: "6",
  },
  {
    content: plusSVG,
  },
  //
  {
    content: "1",
  },
  {
    content: "2",
  },
  {
    content: "3",
  },
  {
    content: equalSVG,
    className: styles.equal,
  },
  //
  {
    content: "0",
  },
  {
    content: ".",
  },
  {
    content: backSVG,
  },
];

export { calcButtons };
