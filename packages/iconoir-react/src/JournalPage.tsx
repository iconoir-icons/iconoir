import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgJournalPage(
  passedProps: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  const context = React.useContext(IconoirContext);
  const props = {
    ...context,
    ...passedProps,
  };
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
        d="M6 6h8M6 10h12M13 14h5M13 18h5M2 21.4V2.6a.6.6 0 01.6-.6h15.652a.6.6 0 01.424.176l3.148 3.148A.6.6 0 0122 5.75V21.4a.6.6 0 01-.6.6H2.6a.6.6 0 01-.6-.6z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 18v-4h3v4H6zM18 2v3.4a.6.6 0 00.6.6H22"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgJournalPage);
export default ForwardRef;
