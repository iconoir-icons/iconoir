import * as React from 'react';

function SvgTransitionRight(
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
        d="M2 18V6a3 3 0 013-3h2a3 3 0 013 3v12a3 3 0 01-3 3H5a3 3 0 01-3-3z"
        stroke="currentColor"
      />
      <path
        d="M16 3h2a4 4 0 014 4v10a4 4 0 01-4 4h-2M10 12h8m0 0l-3-3m3 3l-3 3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgTransitionRight);
export default ForwardRef;
