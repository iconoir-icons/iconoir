import * as React from 'react';

function SvgPhoneDisabled(
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
        d="M8.78 8.5l.49-2.63L7.815 2H4.064c-1.128 0-2.016.93-1.848 2.046.288 1.902.957 4.861 2.51 7.7M10.94 13.5c.837.744 1.847 1.392 3.059 2l4.118-.798L22 16.182v3.584c0 1.192-1.032 2.1-2.197 1.847-2.83-.616-7.83-2.107-11.58-5.432M21 3L3 21"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgPhoneDisabled);
export default ForwardRef;
