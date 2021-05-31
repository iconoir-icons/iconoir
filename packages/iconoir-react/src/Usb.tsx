import * as React from 'react';

function SvgUsb(
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
        d="M12.5 2v15M12.5 14l5.5-2V8.5M12.5 16L7 14.5v-3M12.5 22a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM16.5 5.5v3h3v-3h-3zM10.5 4l2-2 2 2M7 11a2 2 0 100-4 2 2 0 000 4z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgUsb);
export default ForwardRef;
