import * as React from 'react';

function SvgKeyframePosition(
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
        d="M14.73 8.36l-2.25 3a.6.6 0 01-.96 0l-2.25-3a.6.6 0 010-.72l2.25-3a.6.6 0 01.96 0l2.25 3a.6.6 0 010 .72zM3 20h18m-9-3v-2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgKeyframePosition);
export default ForwardRef;
