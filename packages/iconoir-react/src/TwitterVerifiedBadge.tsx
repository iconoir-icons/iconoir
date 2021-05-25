import * as React from 'react';

function SvgTwitterVerifiedBadge(
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
        d="M10.521 2.624a2 2 0 012.958 0l1.02 1.12a2 2 0 001.572.651l1.513-.07a2 2 0 012.092 2.09l-.071 1.514a2 2 0 00.651 1.572l1.12 1.02a2 2 0 010 2.958l-1.12 1.02a2 2 0 00-.651 1.572l.07 1.513a2 2 0 01-2.09 2.092l-1.514-.071a2 2 0 00-1.572.651l-1.02 1.12a2 2 0 01-2.958 0l-1.02-1.12a2 2 0 00-1.572-.651l-1.513.07a2 2 0 01-2.092-2.09l.071-1.514a2 2 0 00-.651-1.572l-1.12-1.02a2 2 0 010-2.958l1.12-1.02a2 2 0 00.651-1.572l-.07-1.513a2 2 0 012.09-2.092l1.514.071a2 2 0 001.572-.651l1.02-1.12z"
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path
        d="M9 12l2 2 4-4"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgTwitterVerifiedBadge);
export default ForwardRef;
