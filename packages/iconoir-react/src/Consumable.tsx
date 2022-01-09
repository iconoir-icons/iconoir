import * as React from 'react';

function SvgConsumable(
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
        d="M22.003 3v4.497A.503.503 0 0121.5 8v0a.52.52 0 01-.466-.3A10 10 0 0012.003 2c-5.185 0-9.449 3.947-9.95 9"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 10v5a2 2 0 01-2 2H9a2 2 0 01-2-2v-5a2 2 0 012-2h6a2 2 0 012 2zM12 11V8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.05 21v-4.497c0-.278.226-.503.504-.503v0c.2 0 .38.119.466.3a10.001 10.001 0 009.03 5.7c5.186 0 9.45-3.947 9.951-9"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgConsumable);
export default ForwardRef;
