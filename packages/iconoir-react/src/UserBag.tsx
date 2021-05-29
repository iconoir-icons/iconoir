import * as React from 'react';

function SvgUserBag(
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
        d="M9 11a4 4 0 100-8 4 4 0 000 8zM2 18a7 7 0 0111.33-5.5M21.364 16.707l.296 2A2 2 0 0119.682 21h-3.364a2 2 0 01-1.978-2.293l.296-2A2 2 0 0116.614 15h2.772a2 2 0 011.978 1.707zM17 13h2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgUserBag);
export default ForwardRef;
