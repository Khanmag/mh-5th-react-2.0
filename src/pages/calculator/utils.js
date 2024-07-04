import styles from "./index.module.css";

const plusSVG = (
  <svg
    width="800px"
    height="800px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="24" height="24" />
    <path
      d="M12 6V18"
      stroke="#1976d2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6 12H18"
      stroke="#1976d2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const calcButtons = [
  //
  {
    content: "AC",
  },
  {
    content: "%",
  },
  {
    content: "/",
  },
  {
    content: "*",
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
    content: <>&mdash;</>,
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
    content: "=",
    className: styles.height2,
  },
  //
  {
    content: "0",
  },
  {
    content: ".",
  },
  {
    content: "<-",
  },
];

export { calcButtons };
