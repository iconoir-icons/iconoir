import * as React from 'react';

function SvgFrameSelect(
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
        d="M4.998 2H2v2.998h2.998V2zM4.999 3.501h14M3.5 4.999V19M20.498 5v14.002M4.999 20.501h14M4.998 19H2v2.998h2.998V19zM21.997 2.002H19V5h2.998V2.002zM21.997 19.002H19V22h2.998v-2.998z"
        stroke="currentColor"
        strokeMiterlimit={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="M10.997 15.002l-3-7 7 3-2.998.999-1.002 3.001z"
        stroke="currentColor"
        strokeMiterlimit={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="M11.999 12.002l2.998 3-2.998-3z"
        stroke="currentColor"
        strokeMiterlimit={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgFrameSelect);
export default ForwardRef;
