import * as React from 'react';

function SvgViewColumns2(
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
        d="M12 3h8.4a.6.6 0 01.6.6v16.8a.6.6 0 01-.6.6H12m0-18H3.6a.6.6 0 00-.6.6v16.8a.6.6 0 00.6.6H12m0-18v18"
        stroke="currentColor"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgViewColumns2);
export default ForwardRef;
