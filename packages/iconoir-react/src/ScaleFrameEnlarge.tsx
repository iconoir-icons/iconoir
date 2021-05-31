import * as React from 'react';

function SvgScaleFrameEnlarge(
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
        d="M11 13.6V21H3.6a.6.6 0 01-.6-.6V13h7.4a.6.6 0 01.6.6zM11 21h3M3 13v-3M6 3H3.6a.6.6 0 00-.6.6V6M14 3h-4M21 10v4M18 3h2.4a.6.6 0 01.6.6V6M18 21h2.4a.6.6 0 00.6-.6V18M11 10h3v3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgScaleFrameEnlarge);
export default ForwardRef;
