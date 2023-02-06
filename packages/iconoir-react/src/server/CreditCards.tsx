import * as React from "react";
function SvgCreditCards(
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
        d="M22 11.429V18a2 2 0 01-2 2H7a2 2 0 01-2-2v-1.5m17-5.071V10a2 2 0 00-2-2h-1m3 3.429h-3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 8v6.5a2 2 0 01-2 2H4a2 2 0 01-2-2v-8a2 2 0 012-2h13a2 2 0 012 2V8zm0 0H5.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgCreditCards);
export default ForwardRef;
