import * as React from 'react';

function SvgSandals(
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
        d="M22 7s.5-4-4-4-4 4-4 4m8 0h-8m8 0l-.214 3M14 7l.214 3m7.572 0l-.587 8.214A3 3 0 0118.207 21h-.414a3 3 0 01-2.992-2.786L14.214 10m7.572 0h-7.572M10 7s.5-4-4-4-4 4-4 4m8 0H2m8 0l-.214 3M2 7l.214 3m7.572 0l-.587 8.214A3 3 0 016.207 21h-.414a3 3 0 01-2.992-2.786L2.214 10m7.572 0H2.214"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgSandals);
export default ForwardRef;
