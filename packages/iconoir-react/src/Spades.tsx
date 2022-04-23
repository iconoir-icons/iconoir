import * as React from 'react';

function SvgSpades(
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
        d="M12 14.5c3 4.5 9 4.47 9-.5 0-4-4-7-9-12-5 5-9 8-9 12 0 4.97 6 5 9 .5z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.47 15.493l-3 5.625A.6.6 0 009 22h6a.6.6 0 00.53-.882l-3-5.625a.6.6 0 00-1.06 0z"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgSpades);
export default ForwardRef;
