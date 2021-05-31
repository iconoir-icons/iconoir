import * as React from 'react';

function SvgGlassHalfAlt(
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
        d="M3.04 4.294a.496.496 0 01.191-.479C3.927 3.32 6.314 2 12 2s8.073 1.32 8.769 1.815a.496.496 0 01.192.479l-1.7 12.744a4 4 0 01-1.98 2.944l-.32.183a10 10 0 01-9.922 0l-.32-.183a4 4 0 01-1.98-2.944l-1.7-12.744zM3 5c2.571 2.667 15.429 2.667 18 0"
        stroke="currentColor"
      />
      <path
        d="M4 13c1.032 1.203 3.925 1.864 7 1.981 3.739.143 7.746-.518 9-1.981M15 14.823V20.5M4 13c2.286-2.667 13.714-2.667 16 0"
        stroke="currentColor"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgGlassHalfAlt);
export default ForwardRef;
