import * as React from "react";
function SvgCloudSquareSolid(
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
        d="M3.6 2.25A1.35 1.35 0 002.25 3.6v16.8c0 .746.604 1.35 1.35 1.35h16.8a1.35 1.35 0 001.35-1.35V3.6a1.35 1.35 0 00-1.35-1.35H3.6zm8.4 5c-1.792 0-2.897.557-3.491 1.464-.35.536-.47 1.128-.511 1.609-.445.085-.94.255-1.388.551-.76.502-1.36 1.353-1.36 2.626s.6 2.124 1.36 2.626c.72.475 1.555.624 2.117.624h6.546c.562 0 1.398-.149 2.117-.624.76-.502 1.36-1.353 1.36-2.626s-.6-2.124-1.36-2.626a3.856 3.856 0 00-1.388-.551c-.04-.481-.16-1.073-.51-1.609-.595-.907-1.7-1.464-3.492-1.464z"
        fill="currentColor"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgCloudSquareSolid);
export default ForwardRef;
