import * as React from 'react';

function SvgMapsArrow(
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
        d="M3.685 18.783l7.88-14.008a.5.5 0 01.87 0l7.88 14.008a.5.5 0 01-.617.71l-7.517-2.922a.5.5 0 00-.362 0l-7.517 2.923a.5.5 0 01-.617-.711z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgMapsArrow);
export default ForwardRef;
