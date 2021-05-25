import * as React from 'react';

function SvgFlipReverse(
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
        d="M9.5 12v2M5.75 12l-.938 2M7.625 20H9.5v-2M3.875 20H2l.938-2M7.625 8L9.5 4v4M14.5 20H22L14.5 4v16z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgFlipReverse);
export default ForwardRef;
