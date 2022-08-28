import * as React from "react";
import { IconoirContext } from "./IconoirContext";

function SvgFootballBall(
  passedProps: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  const context = React.useContext(IconoirContext);
  const props = { ...context, ...passedProps };
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
        d="M4.115 14.015a22.314 22.314 0 00-.103 3.665 2.413 2.413 0 002.309 2.308c1.007.052 2.294.055 3.664-.103m-5.87-5.87C4.394 11.604 5.17 8.93 7.05 7.05c1.88-1.88 4.554-2.656 6.965-2.935m-9.9 9.9l5.87 5.87m0 0c2.411-.279 5.084-1.055 6.965-2.935 1.88-1.88 2.656-4.554 2.935-6.965m-5.87-5.87a22.314 22.314 0 013.665-.103 2.413 2.413 0 012.308 2.309 22.312 22.312 0 01-.103 3.664m-5.87-5.87l5.87 5.87M9.172 14.828l1.414-1.414m0 0L9.172 12m1.414 1.414L12 14.828m-1.414-1.414l2.828-2.828m0 0l1.414-1.414m-1.414 1.414L12 9.172m1.414 1.414L14.828 12"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgFootballBall);
export default ForwardRef;
