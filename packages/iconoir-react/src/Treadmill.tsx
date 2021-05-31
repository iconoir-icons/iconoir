import * as React from 'react';

function SvgTreadmill(
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
        d="M13 6a2 2 0 100-4 2 2 0 000 4zM10.613 7.267l-3.308 4.135 4.135 4.135-2.067 4.55"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.41 8.508l3.387-3.309 2.816 2.068 2.895 3.308h1.722M6.892 14.71l-1.241.827H2.343M3.343 21.537l15.308-2V8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.892 6L18.65 8 17 9.5M20.891 21.71l-2.24-2.173"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgTreadmill);
export default ForwardRef;
