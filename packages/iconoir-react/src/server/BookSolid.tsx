import * as React from "react";
function SvgBookSolid(
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.75 16.714a.755.755 0 01-.014.143.75.75 0 01-.736.893H6a1.25 1.25 0 100 2.5h14a.75.75 0 010 1.5H6A2.75 2.75 0 013.25 19V5A2.75 2.75 0 016 2.25h13.4c.746 0 1.35.604 1.35 1.35v13.114zM9 6.25a.75.75 0 000 1.5h6a.75.75 0 000-1.5H9z"
        fill="currentColor"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgBookSolid);
export default ForwardRef;
