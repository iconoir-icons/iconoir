import * as React from 'react';

function SvgKeyframeAlignCenter(
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
        d="M15.7 12.375l-3.231 4.04a.6.6 0 01-.938 0L8.3 12.374a.6.6 0 010-.75l3.231-4.04a.6.6 0 01.938 0l3.231 4.04a.6.6 0 010 .75zM12 22v-2M12 4V2M4 12H2M22 12h-2"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgKeyframeAlignCenter);
export default ForwardRef;
