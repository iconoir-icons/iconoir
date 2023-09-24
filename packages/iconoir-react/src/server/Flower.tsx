import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgFlower = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      strokeMiterlimit={1.5}
      d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM13 9s1-2 1-4-2-4-2-4-2 2-2 4 1 4 1 4"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={1.5}
      d="M9 11s-2-1-4-1-4 2-4 2 2 2 4 2 4-1 4-1M13 15s1 2 1 4-2 4-2 4-2-2-2-4 1-4 1-4M15 11s2-1 4-1 4 2 4 2-2 2-4 2-4-1-4-1M10.586 9.172S9.879 7.05 8.464 5.636C7.05 4.222 4.222 4.222 4.222 4.222s0 2.828 1.414 4.243c1.414 1.414 3.536 2.121 3.536 2.121M9.172 13.414s-2.122.707-3.536 2.122c-1.414 1.414-1.414 4.242-1.414 4.242s2.828 0 4.242-1.414c1.415-1.414 2.122-3.536 2.122-3.536M14.829 13.414s2.12.707 3.535 2.122c1.414 1.414 1.414 4.242 1.414 4.242s-2.828 0-4.242-1.414c-1.415-1.414-2.122-3.536-2.122-3.536M13.414 9.172s.707-2.122 2.122-3.536c1.414-1.414 4.242-1.414 4.242-1.414s0 2.828-1.414 4.243c-1.414 1.414-3.536 2.121-3.536 2.121"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgFlower);
export default ForwardRef;
