import * as React from 'react';

function SvgAlignLeftBox(
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
        d="M16.004 3.995l-.011.01M20.004 3.995l-.011.01M20.004 7.995l-.011.01M20.004 11.995l-.011.01M20.004 15.995l-.011.01M20.004 19.995l-.011.01M16.004 19.995l-.011.01M12.006 3.995h-8v16h8v-16z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgAlignLeftBox);
export default ForwardRef;
