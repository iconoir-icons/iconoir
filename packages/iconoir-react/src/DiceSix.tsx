import * as React from 'react';

function SvgDiceSix(
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  return (
    <svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <path
        d="M3 20.4V3.6a.6.6 0 01.6-.6h16.8a.6.6 0 01.6.6v16.8a.6.6 0 01-.6.6H3.6a.6.6 0 01-.6-.6z"
        stroke="currentColor"
      />
      <path
        d="M7.5 8a.5.5 0 110-1 .5.5 0 010 1zM16.5 8a.5.5 0 110-1 .5.5 0 010 1zM7.5 12.5a.5.5 0 110-1 .5.5 0 010 1zM16.5 12.5a.5.5 0 110-1 .5.5 0 010 1zM7.5 17a.5.5 0 110-1 .5.5 0 010 1zM16.5 17a.5.5 0 110-1 .5.5 0 010 1z"
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgDiceSix);
export default ForwardRef;
