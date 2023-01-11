import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgPeaceHand(
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
        d="M14.149 9.472v-5.86c0-.89-.722-1.612-1.612-1.612v0c-.89 0-1.611.722-1.611 1.612v4.834"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M16.346 12.841l2.176-7.252a1.584 1.584 0 00-1.083-1.98v0a1.585 1.585 0 00-1.961 1.098l-1.33 4.764M7.62 9.25l1.055 2.341a1.612 1.612 0 01-2.938 1.325L4.68 10.575A1.612 1.612 0 017.62 9.25z"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M11.72 12.261v0a2.322 2.322 0 00-.068-1.742l-1.073-2.38a1.584 1.584 0 00-2.101-.79v0a1.584 1.584 0 00-.764 2.14l.135.276"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M13.857 17.677l.492-.984a.176.176 0 00-.108-.248l-3.55-1.044a1.537 1.537 0 01-1.095-1.635v0a1.537 1.537 0 011.67-1.37l4.788.446s3.81.586 2.49 4.395c-1.318 3.81-1.757 5.128-4.687 5.128H8.876a4.249 4.249 0 01-4.249-4.249v0L4.48 9.912"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgPeaceHand);
export default ForwardRef;
