import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgSettingsProfiles = (
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
        d="M11.607 2.342a.6.6 0 0 1 .787 0l1.948 1.692a.6.6 0 0 0 .445.145l2.572-.224a.6.6 0 0 1 .636.463l.582 2.514a.6.6 0 0 0 .275.38l2.212 1.33a.6.6 0 0 1 .243.748l-1.008 2.376a.6.6 0 0 0 0 .468l1.008 2.376a.6.6 0 0 1-.243.749l-2.212 1.33a.6.6 0 0 0-.275.379l-.582 2.514a.6.6 0 0 1-.636.463l-2.572-.224a.6.6 0 0 0-.445.144l-1.949 1.693a.6.6 0 0 1-.787 0l-1.948-1.693a.6.6 0 0 0-.445-.144l-2.572.224a.6.6 0 0 1-.636-.463l-.582-2.514a.6.6 0 0 0-.275-.38l-2.212-1.33a.6.6 0 0 1-.243-.748l1.008-2.376a.6.6 0 0 0 0-.468L2.693 9.39a.6.6 0 0 1 .243-.749l2.212-1.33a.6.6 0 0 0 .275-.379l.582-2.514a.6.6 0 0 1 .636-.463l2.572.224a.6.6 0 0 0 .445-.145l1.949-1.692Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m9 13 2 2 5-5"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgSettingsProfiles);
export default ForwardRef;
