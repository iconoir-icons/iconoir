import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgBitbucket = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
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
      d="m20.916 4.674-1.85 14.8a.6.6 0 0 1-.596.526H5.53a.6.6 0 0 1-.596-.526l-1.85-14.8A.6.6 0 0 1 3.68 4h16.64a.6.6 0 0 1 .596.674Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m16.75 7.75-.938 7.97a.6.6 0 0 1-.595.53H8.784a.6.6 0 0 1-.596-.53l-.859-7.3a.6.6 0 0 1 .596-.67h8.825Zm0 0h3.75"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgBitbucket);
export default ForwardRef;
