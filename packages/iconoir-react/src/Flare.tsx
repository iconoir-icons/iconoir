import * as React from 'react';

function SvgFlare(
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
        d="M11.456 2.665a.6.6 0 011.088 0l2.864 6.137a.6.6 0 00.29.29l6.137 2.864a.6.6 0 010 1.088l-6.137 2.864a.6.6 0 00-.29.29l-2.864 6.137a.6.6 0 01-1.088 0l-2.864-6.137a.6.6 0 00-.29-.29l-6.137-2.864a.6.6 0 010-1.088l6.137-2.864a.6.6 0 00.29-.29l2.864-6.137z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgFlare);
export default ForwardRef;
