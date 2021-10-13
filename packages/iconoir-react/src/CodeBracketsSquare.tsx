import * as React from 'react';

function SvgCodeBracketsSquare(
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  return (
    <svg
      width="1.5em"
      strokeWidth={1.5}
      height="1.5em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <path
        d="M10 17h-.667a2 2 0 01-2-2v-1.889C7.333 12.556 6 12 6 12s1.333-.556 1.333-1.111V9a2 2 0 012-2H10M14 17h.667a2 2 0 002-2v-1.889C16.667 12.556 18 12 18 12s-1.333-.556-1.333-1.111V9a2 2 0 00-2-2H14"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 3.6v16.8a.6.6 0 01-.6.6H3.6a.6.6 0 01-.6-.6V3.6a.6.6 0 01.6-.6h16.8a.6.6 0 01.6.6z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgCodeBracketsSquare);
export default ForwardRef;
