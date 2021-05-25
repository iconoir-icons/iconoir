import * as React from 'react';

function SvgWind(
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
        d="M18.279 7C19.782 7 21 8.12 21 9.5S19.782 12 18.279 12H3M17.938 20c1.139 0 2.562-.5 2.562-2.5S19.077 15 17.937 15H3M10.412 4C11.842 4 13 5.12 13 6.5S11.841 9 10.412 9H3"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgWind);
export default ForwardRef;
