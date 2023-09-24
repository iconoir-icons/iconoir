import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgAfricanTree = (
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
        clipPath="url(#african-tree_svg__a)"
      >
        <path d="M12 22V12m0-4v4m0 0 3-3M12.424 18.576l6.169-6.169a5.502 5.502 0 0 0-.513-8.234 9.904 9.904 0 0 0-12.16 0 5.502 5.502 0 0 0-.513 8.234l6.169 6.169a.6.6 0 0 0 .848 0Z" />
      </g>
      <defs>
        <clipPath id="african-tree_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgAfricanTree);
export default ForwardRef;
