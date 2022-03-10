import * as React from 'react';

function SvgPerspectiveView(
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
        d="M1 21L4.143 3h15.714L23 21H1zM2 16.5h20M3 12h18M4 7.5h16M12 3v18M8 3.5l-1.5 17M16 3.5l1.5 17"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgPerspectiveView);
export default ForwardRef;
