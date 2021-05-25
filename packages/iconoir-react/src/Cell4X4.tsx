import * as React from 'react';

function SvgCell4X4(
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
        d="M21 3.6V12h-9V3h8.4a.6.6 0 01.6.6zM21 20.4V12h-9v9h8.4a.6.6 0 00.6-.6zM3 12V3.6a.6.6 0 01.6-.6H12v9H3zM3 12v8.4a.6.6 0 00.6.6H12v-9H3z"
        stroke="currentColor"
        strokeWidth={1.5}
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgCell4X4);
export default ForwardRef;
