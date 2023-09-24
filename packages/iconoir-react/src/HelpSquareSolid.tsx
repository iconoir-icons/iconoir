import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgHelpSquareSolid(
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
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.25 3.6c0-.746.604-1.35 1.35-1.35h16.8c.746 0 1.35.604 1.35 1.35v16.8a1.35 1.35 0 01-1.35 1.35H3.6a1.35 1.35 0 01-1.35-1.35V3.6zm8.095 4.003C10 7.895 9.75 8.341 9.75 9a.75.75 0 01-1.5 0c0-1.091.437-1.958 1.124-2.54.67-.57 1.538-.835 2.376-.835.838 0 1.705.265 2.376.834.687.583 1.124 1.45 1.124 2.541 0 .766-.196 1.35-.517 1.83-.269.404-.619.716-.894.962l-.087.078c-.308.276-.539.504-.709.804-.162.287-.293.688-.293 1.326a.75.75 0 11-1.5 0c0-.862.181-1.524.488-2.065.299-.528.693-.894 1.01-1.18l.072-.065c.3-.27.508-.455.665-.692.149-.222.265-.514.265-.998 0-.659-.25-1.105-.595-1.397-.36-.306-.868-.478-1.405-.478s-1.045.172-1.405.478zm2.223 10.898a.75.75 0 00-1.115-1.004l-.01.011a.75.75 0 001.114 1.004l.01-.011z"
        fill="currentColor"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgHelpSquareSolid);
export default ForwardRef;
