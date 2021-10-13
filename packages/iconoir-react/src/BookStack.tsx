import * as React from 'react';

function SvgBookStack(
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  return (
    <svg
      width="1.5em"
      strokeWidth={1.5}
      height="1.5em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <path
        d="M5 19.5V5a2 2 0 012-2h11.4a.6.6 0 01.6.6V21M9 7h6M6.5 15H19M6.5 18H19M6.5 21H19"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M6.5 18c-1 0-1.5-.672-1.5-1.5S5.5 15 6.5 15M6.5 21c-1 0-1.5-.672-1.5-1.5S5.5 18 6.5 18"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgBookStack);
export default ForwardRef;
