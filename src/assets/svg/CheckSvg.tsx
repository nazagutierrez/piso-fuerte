const CheckSvg = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      className={className}
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
};

export default CheckSvg;
