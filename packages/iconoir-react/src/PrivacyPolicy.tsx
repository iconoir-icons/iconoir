import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgPrivacyPolicy = (
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
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20 12V5.749a.6.6 0 0 0-.176-.425l-3.148-3.148A.6.6 0 0 0 16.252 2H4.6a.6.6 0 0 0-.6.6v18.8a.6.6 0 0 0 .6.6H13M8 10h8M8 6h4m-4 8h3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16 2v3.4a.6.6 0 0 0 .6.6H20M19.992 15.125l2.556.649c.266.068.453.31.445.584C22.821 22.116 19.5 23 19.5 23s-3.321-.884-3.493-6.642a.588.588 0 0 1 .445-.584l2.556-.649c.323-.082.661-.082.984 0Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgPrivacyPolicy);
export default ForwardRef;
