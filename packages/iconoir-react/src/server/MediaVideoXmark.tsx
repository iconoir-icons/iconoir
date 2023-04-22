import * as React from "react";
function SvgMediaVideoXmark(
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
        d="M16.879 21.121L19 19m2.121-2.121L19 19m0 0l-2.121-2.121M19 19l2.121 2.121M13 21H3.6a.6.6 0 01-.6-.6V3.6a.6.6 0 01.6-.6h16.8a.6.6 0 01.6.6V13"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.898 8.513a.6.6 0 00-.898.52v5.933a.6.6 0 00.898.521l5.19-2.966a.6.6 0 000-1.042l-5.19-2.966z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgMediaVideoXmark);
export default ForwardRef;
