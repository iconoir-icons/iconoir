import * as React from 'react';

function SvgNoLock(
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
        d="M11.5 12H6.6a.6.6 0 00-.6.6v6.8a.6.6 0 00.6.6h10.8a.6.6 0 00.6-.6v-.9M16 12V8c0-1.333-.8-4-4-4-.747 0-1.363.145-1.869.385M16 12h1.4a.6.6 0 01.6.6v.4M8 8v4M3 3l18 18"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgNoLock);
export default ForwardRef;
