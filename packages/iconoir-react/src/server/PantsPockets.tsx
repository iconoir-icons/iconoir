import * as React from "react";
function SvgPantsPockets(
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
        d="M5.035 3.633a.6.6 0 01.6-.633h12.73a.6.6 0 01.6.633l-.933 16.8a.6.6 0 01-.6.567h-2.898a.6.6 0 01-.596-.53L12.596 9.065c-.083-.706-1.109-.706-1.192 0L10.062 20.47a.6.6 0 01-.596.53H6.568a.6.6 0 01-.6-.567l-.933-16.8z"
        stroke="currentColor"
      />
      <path
        d="M5 7.5h1.5a2 2 0 002-2V3M18.5 7.5h-1a2 2 0 01-2-2V3"
        stroke="currentColor"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgPantsPockets);
export default ForwardRef;
