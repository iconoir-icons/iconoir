import * as React from 'react';

function SvgShoppingCodeCheck(
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
        d="M6 5v2M10 5v6M18 5v1M6 10v6M6 18.5v.5M10 18.5v.5M10 14v2M14 13v2M14 5v5M18 9v4M15 19l2 2 4-4"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgShoppingCodeCheck);
export default ForwardRef;
