const style = {
  minHeight: "1.5rem",
  minWidth: "1.5rem",
};

export const ArrowTopIcon = (): React.JSX.Element => {
  return (
    <svg
      style={style}
      fill="none"
      height="1rem"
      viewBox="0 0 24 24"
      width="1rem"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 4V20M12 4L8 8M12 4L16 8"
        stroke="#151515"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};
