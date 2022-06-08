import * as React from 'react';

function SvgSmallLampAlt(
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  return (
    <svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <path
        d="M6.872 3.428l-2.64 8.8a.6.6 0 00.574.772h14.388a.6.6 0 00.574-.772l-2.64-8.8A.6.6 0 0016.554 3H7.446a.6.6 0 00-.574.428zM8 15v-2M8 21h8m-4-6v6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgSmallLampAlt);
export default ForwardRef;
