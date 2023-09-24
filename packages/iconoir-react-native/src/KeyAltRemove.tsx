import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgKeyAltRemove = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M15.87 20.121 17.993 18m2.121-2.121L17.993 18m0 0-2.122-2.121M17.992 18l2.121 2.121M12.412 10.343a4 4 0 1 0 5.657-5.657 4 4 0 0 0-5.657 5.657Zm0 0-8.485 8.485 2.121 2.122M6.755 16l2.122 2.121"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgKeyAltRemove);
export default ForwardRef;
