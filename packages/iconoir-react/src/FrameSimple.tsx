import * as React from 'react';

function SvgFrameSimple(
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
        d="M4.998 2H2v2.998h2.998V2z"
        stroke="currentColor"
        strokeWidth={1.499}
        strokeMiterlimit={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.998 3.501h14"
        stroke="currentColor"
        strokeWidth={1.503}
        strokeMiterlimit={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.499 4.998V19M20.497 5v14.002"
        stroke="currentColor"
        strokeWidth={1.356}
        strokeMiterlimit={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.998 20.501h14"
        stroke="currentColor"
        strokeWidth={1.503}
        strokeMiterlimit={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.998 19H2v2.998h2.998V19zM21.996 2.002h-2.998V5h2.998V2.002zM21.996 19.002h-2.998V22h2.998v-2.998z"
        stroke="currentColor"
        strokeWidth={1.499}
        strokeMiterlimit={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgFrameSimple);
export default ForwardRef;
