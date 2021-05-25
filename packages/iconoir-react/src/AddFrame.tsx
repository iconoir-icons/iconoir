import * as React from 'react';

function SvgAddFrame(
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
        d="M4.999 3.5h14"
        stroke="currentColor"
        strokeWidth={1.503}
        strokeMiterlimit={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 4.998V19M20.498 5v14.002"
        stroke="currentColor"
        strokeWidth={1.356}
        strokeMiterlimit={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.999 20.5h14"
        stroke="currentColor"
        strokeWidth={1.503}
        strokeMiterlimit={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.998 19H2v2.998h2.998V19zM21.997 2.001H19v2.998h2.998V2.001zM21.997 19.001H19v2.998h2.998v-2.998z"
        stroke="currentColor"
        strokeWidth={1.499}
        strokeMiterlimit={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 12h3m3 0h-3m0 0V9m0 3v3"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgAddFrame);
export default ForwardRef;
