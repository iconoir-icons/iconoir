import * as React from 'react';

function SvgFrameAlt(
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  return (
    <svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <path
        d="M6 3v18M18 3v18M3 6h18"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.6 9h4.8a.6.6 0 01.6.6v4.8a.6.6 0 01-.6.6H9.6a.6.6 0 01-.6-.6V9.6a.6.6 0 01.6-.6z"
        fill="currentColor"
      />
      <path
        d="M3 18h18"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgFrameAlt);
export default ForwardRef;
