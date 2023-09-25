import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgGoogleDriveCheck = (
  passedProps: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => {
  const context = React.useContext(IconoirContext);
  const props = {
    ...context,
    ...passedProps,
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      fill="none"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <g
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        clipPath="url(#google-drive-check_svg__a)"
      >
        <path d="M9.143 3.004 14.857 3m-5.714.004L2 15.004m7.143-12 4.902 9.496m.812-9.5L5.575 21m9.282-18L21.5 14M5.575 21 2 15.004M5.575 21h6.429M2 15.004h10.5M15 19l3 3 5-5" />
      </g>
      <defs>
        <clipPath id="google-drive-check_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgGoogleDriveCheck);
export default ForwardRef;
