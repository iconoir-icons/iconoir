import * as React from 'react';

function SvgFlip(
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
        d="M9.5 20H2L9.5 4v16zM20.125 20H22l-.938-2M16.375 20H14.5v-2M14.5 12v2M18.25 12l.938 2M16.375 8L14.5 4v4"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgFlip);
export default ForwardRef;
