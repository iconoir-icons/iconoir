import * as React from 'react';

function SvgGym(
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  return (
    <svg
      width="1.5em"
      height="1.5em"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <path
        d="M7.4 7H4.6a.6.6 0 00-.6.6v8.8a.6.6 0 00.6.6h2.8a.6.6 0 00.6-.6V7.6a.6.6 0 00-.6-.6zM19.4 7h-2.8a.6.6 0 00-.6.6v8.8a.6.6 0 00.6.6h2.8a.6.6 0 00.6-.6V7.6a.6.6 0 00-.6-.6z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 14.4V9.6a.6.6 0 01.6-.6h1.8a.6.6 0 01.6.6v4.8a.6.6 0 01-.6.6H1.6a.6.6 0 01-.6-.6zM23 14.4V9.6a.6.6 0 00-.6-.6h-1.8a.6.6 0 00-.6.6v4.8a.6.6 0 00.6.6h1.8a.6.6 0 00.6-.6zM8 12h8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgGym);
export default ForwardRef;
