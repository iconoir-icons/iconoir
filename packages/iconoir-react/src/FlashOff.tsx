import * as React from 'react';

function SvgFlashOff(
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
        d="M7.585 7.876l-.305 3.722c-.063.704.399 1.332 1.032 1.402.058.005.058.005.115.006L11 13l-.451 7.683c-.012.209.264.294.37.114.678-1.135 2.063-3.464 3.328-5.604M8.5 3h5c.127 0 .254.023.375.07.602.23.922.958.715 1.627L13.1 8.802h2.748c.203 0 .402.06.578.173.55.356.738 1.14.418 1.75-.069.137-.242.444-.49.873M4 4l16 16"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgFlashOff);
export default ForwardRef;
