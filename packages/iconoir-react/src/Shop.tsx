import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgShop = (
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
      <path d="M3 10v9a2 2 0 002 2h14a2 2 0 002-2v-9" stroke="currentColor" />
      <path
        d="M14.833 21v-6a2 2 0 00-2-2h-2a2 2 0 00-2 2v6"
        stroke="currentColor"
        strokeMiterlimit={16}
      />
      <path
        d="M21.818 9.364l-1.694-5.929A.6.6 0 0019.547 3H15.5l.475 5.704a.578.578 0 00.278.45c.39.233 1.152.663 1.747.846 1.016.313 2.5.2 3.346.096a.57.57 0 00.472-.732z"
        stroke="currentColor"
        d="M20.485 3h-3.992l.5 5s1 1 2.5 1a3.23 3.23 0 0 0 2.139-.806.503.503 0 0 0 .15-.465L21.076 3.5A.6.6 0 0 0 20.485 3Z"
      />
      <path
        d="M14 10c.568-.175 1.288-.574 1.69-.812a.578.578 0 00.28-.549L15.5 3h-7l-.47 5.639a.578.578 0 00.28.55c.402.237 1.122.636 1.69.811 1.493.46 2.507.46 4 0z"
        stroke="currentColor"
        d="m16.493 3 .5 5s-1 1-2.5 1-2.5-1-2.5-1V3h4.5Z"
      />
      <path
        d="M3.876 3.435l-1.694 5.93a.57.57 0 00.472.73c.845.105 2.33.217 3.346-.095.595-.183 1.358-.613 1.747-.845a.578.578 0 00.278-.451L8.5 3H4.453a.6.6 0 00-.577.435z"
        stroke="currentColor"
        d="M11.993 3v5s-1 1-2.5 1-2.5-1-2.5-1l.5-5h4.5Z"
      />
      <path
        stroke="currentColor"
        d="M7.493 3H3.502a.6.6 0 0 0-.592.501L2.205 7.73c-.029.172.02.349.15.465.328.29 1.061.806 2.138.806 1.5 0 2.5-1 2.5-1l.5-5Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgShop);
export default ForwardRef;
