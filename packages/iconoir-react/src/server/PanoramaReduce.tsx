import * as React from "react";
function SvgPanoramaReduce(
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
        d="M21 6.862v10.276a.615.615 0 01-.811.58C18.546 17.165 14.749 16 12 16c-2.749 0-6.546 1.166-8.189 1.717a.615.615 0 01-.811-.58V6.863c0-.418.415-.712.811-.58C5.454 6.835 9.251 8 12 8c2.749 0 6.546-1.166 8.189-1.717a.615.615 0 01.811.58z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgPanoramaReduce);
export default ForwardRef;
