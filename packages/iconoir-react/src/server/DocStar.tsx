import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgDocStar = (
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
      d="m16.306 17.113.909-1.927a.312.312 0 0 1 .57 0l.91 1.927 2.032.311c.261.04.365.376.177.568l-1.471 1.5.347 2.118c.044.272-.229.48-.462.351l-1.818-1-1.818 1c-.234.129-.506-.079-.462-.351l.347-2.118-1.47-1.5c-.19-.192-.085-.528.176-.568l2.033-.31Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20 12V5.749a.6.6 0 0 0-.176-.425l-3.148-3.148A.6.6 0 0 0 16.252 2H4.6a.6.6 0 0 0-.6.6v18.8a.6.6 0 0 0 .6.6H11"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16 2v3.4a.6.6 0 0 0 .6.6H20"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgDocStar);
export default ForwardRef;
