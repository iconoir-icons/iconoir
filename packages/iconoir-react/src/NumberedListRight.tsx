import * as React from 'react';

function SvgNumberedListRight(
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
        d="M4 6h11M19 8V4M20 14h-1.4a.6.6 0 01-.6-.6v-.8a.6.6 0 01.6-.6h.8a.6.6 0 00.6-.6v-.8a.6.6 0 00-.6-.6H18M18 16h1.4a.6.6 0 01.6.6v2.8a.6.6 0 01-.6.6H18M20 18h-2M4 12h11M4 18h11"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgNumberedListRight);
export default ForwardRef;
