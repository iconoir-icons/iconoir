import * as React from 'react';

function SvgWaist(
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
        d="M18.4 4s-1.6 3.75-1.6 6.857c0 .995.34 1.827.8 2.656.528.954 1.214 1.903 1.717 3.09.399.943.683 2.034.683 3.397M5.6 4s1.6 3.75 1.6 6.857c0 .995-.34 1.827-.8 2.656-.528.954-1.214 1.903-1.717 3.09A8.483 8.483 0 004 20M6.4 13.513h11.2"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.683 16.604S10.4 17.713 12 20c1.6-2.286 7.317-3.396 7.317-3.396"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgWaist);
export default ForwardRef;
