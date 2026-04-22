const ArrowDownSvg = ({ className }: { className?: string }) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      className={className}
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M507.344 154.765c-7.713-10.283-22.301-12.367-32.582-4.655L256.005 314.182 37.238 150.11c-10.283-7.713-24.869-5.626-32.582 4.655c-7.713 10.282-5.627 24.871 4.655 32.582l232.732 174.544c4.138 3.103 9.05 4.655 13.964 4.655c4.912 0 9.826-1.552 13.964-4.655l232.72-174.544C512.971 179.636 515.056 165.048 507.344 154.765z" />
    </svg>
  );
};

export default ArrowDownSvg;
