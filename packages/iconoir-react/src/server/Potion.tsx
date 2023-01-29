import * as React from "react";
function SvgPotion(
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
        d="M10 4h4v2.568c0 .258.17.487.412.579C22.938 10.37 20.907 22 15 22H9c-5.907 0-7.937-11.63.588-14.853a.629.629 0 00.412-.58V4z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M6 10h12" stroke="currentColor" />
      <path d="M9 2h6" stroke="currentColor" strokeLinecap="round" />
      <path
        d="M11.667 13L10 16h4l-1.667 3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgPotion);
export default ForwardRef;
