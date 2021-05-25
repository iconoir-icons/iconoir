import * as React from 'react';

function SvgWeightAlt(
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
        d="M16.5 5h3.9a.6.6 0 01.6.6v14.8a.6.6 0 01-.6.6H3.6a.6.6 0 01-.6-.6V5.6a.6.6 0 01.6-.6h3.9"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.279 6.329l.205-1.23a.605.605 0 000-.198l-.206-1.23A2 2 0 0014.307 2H9.694a2 2 0 00-1.973 1.671l-.205 1.23a.6.6 0 000 .198l.205 1.23A2 2 0 009.694 8h4.612a2 2 0 001.973-1.671zM12 8l-1-2.5M7 17h10"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgWeightAlt);
export default ForwardRef;
