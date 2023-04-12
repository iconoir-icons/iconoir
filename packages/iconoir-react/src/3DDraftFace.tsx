import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function Svg3DDraftFace(
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
        d="M20 7.78v7.796a.6.6 0 01-.27.502l-6.616 4.347a.6.6 0 01-.249.093l-10.184 1.39A.6.6 0 012 21.312V9.012a.6.6 0 01.298-.519l10.789-6.28a.6.6 0 01.688.058l6.01 5.05A.6.6 0 0120 7.78z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 9l10.227 2.922a.6.6 0 00.506-.084L19.5 7.5M13 20.5V12M16.5 14.01l.01-.011M22 17.01l.01-.011"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(Svg3DDraftFace);
export default ForwardRef;
