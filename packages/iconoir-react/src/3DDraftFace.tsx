import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const Svg3DDraftFace = (
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
        d="M20 7.78v7.796a.6.6 0 0 1-.27.502l-6.616 4.347a.6.6 0 0 1-.249.093l-10.184 1.39A.6.6 0 0 1 2 21.312V9.012a.6.6 0 0 1 .298-.519l10.789-6.28a.6.6 0 0 1 .688.058l6.01 5.05A.6.6 0 0 1 20 7.78Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m2.5 9 10.227 2.922a.6.6 0 0 0 .506-.084L19.5 7.5M13 20.5V12M16.5 14.01l.01-.011M22 17.01l.01-.011"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(Svg3DDraftFace);
export default ForwardRef;
