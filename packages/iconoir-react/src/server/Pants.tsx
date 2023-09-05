import * as React from "react";
function SvgPants(
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
        d="M12 19h4.436a.6.6 0 00.6-.563l.924-14.8A.6.6 0 0017.361 3H6.634a.6.6 0 00-.599.633l.934 16.8a.6.6 0 00.599.567H11.4a.6.6 0 00.6-.6V8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgPants);
export default ForwardRef;
