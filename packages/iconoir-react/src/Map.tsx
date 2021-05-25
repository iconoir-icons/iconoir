import * as React from 'react';

function SvgMap(
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
        d="M9 19l-5.21 1.737a.6.6 0 01-.79-.57V5.433a.6.6 0 01.41-.569L9 3m0 16l6 2m-6-2V3m6 18l5.59-1.863a.6.6 0 00.41-.57V3.832a.6.6 0 00-.79-.569L15 5m0 16V5m0 0L9 3"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgMap);
export default ForwardRef;
