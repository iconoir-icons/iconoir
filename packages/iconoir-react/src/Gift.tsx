import * as React from 'react';

function SvgGift(
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
        d="M20 12v9.4a.6.6 0 01-.6.6H4.6a.6.6 0 01-.6-.6V12M21.4 7H2.6a.6.6 0 00-.6.6v3.8a.6.6 0 00.6.6h18.8a.6.6 0 00.6-.6V7.6a.6.6 0 00-.6-.6zM12 22V7M12 7H7.5a2.5 2.5 0 110-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgGift);
export default ForwardRef;
