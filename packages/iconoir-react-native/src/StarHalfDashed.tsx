import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgStarHalfDashed = (passedProps: SvgProps, ref: Ref<Svg>) => {
  const context = React.useContext(IconoirContext);
  const props = {
    ...context,
    ...passedProps,
  };
  return (
    <Svg
      width="1.5em"
      height="1.5em"
      fill="none"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12.815 3.004a.911.911 0 0 0-1.63 0l-.496.998M12 18.678l-1.572.822M5.671 19.369l-.185 1.072c-.127.739.653 1.302 1.32.953l.847-.443M6.253 16l.225-1.308-.695-.673M3.699 12l-1.423-1.378a.902.902 0 0 1 .503-1.542l1.11-.161M7 8.467l1.587-.231.804-1.618"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m15.413 8.236-2.598-5.232A.899.899 0 0 0 12 2.5v16.178l5.195 2.716c.666.349 1.446-.214 1.319-.953l-.992-5.75 4.202-4.07a.902.902 0 0 0-.503-1.54l-5.808-.845Z"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgStarHalfDashed);
export default ForwardRef;
