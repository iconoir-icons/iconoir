import * as React from "react";
function SvgShortPants(
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
        d="M3.06 5.655A.6.6 0 013.658 5h16.684a.6.6 0 01.598.655l-1.176 12.8a.6.6 0 01-.597.545h-4.152a.6.6 0 01-.574-.424l-1.867-6.102c-.174-.566-.974-.566-1.148 0l-1.868 6.102a.6.6 0 01-.573.424H4.833a.6.6 0 01-.597-.545L3.643 12 3.06 5.655z"
        stroke="currentColor"
      />
      <path
        d="M4 9.5h1.5a2 2 0 002-2V5M20.5 9.5h-2a2 2 0 01-2-2V5"
        stroke="currentColor"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgShortPants);
export default ForwardRef;
