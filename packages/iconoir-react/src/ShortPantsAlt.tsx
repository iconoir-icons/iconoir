import * as React from 'react';

function SvgShortPantsAlt(
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
        d="M12 16.8h6.966a.6.6 0 00.596-.53l1.36-11.6a.6.6 0 00-.596-.67H3.659a.6.6 0 00-.597.656l1.387 14.8a.6.6 0 00.597.544H11.4a.6.6 0 00.6-.6V12"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgShortPantsAlt);
export default ForwardRef;
