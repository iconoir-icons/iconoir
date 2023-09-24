import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgEject = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        fill="currentColor"
        d="m5 14-.592-.46A.75.75 0 0 0 5 14.75V14Zm14 0v.75a.75.75 0 0 0 .592-1.21L19 14Zm-14 .75h14v-1.5H5v1.5Zm5.619-9.196L4.408 13.54l1.184.92 6.21-7.985-1.183-.92Zm8.973 7.986-6.21-7.986-1.185.921 6.211 7.986 1.184-.921Zm-7.79-7.065a.25.25 0 0 1 .395 0l1.184-.92c-.7-.901-2.062-.901-2.762 0l1.184.92ZM5 17.25a.75.75 0 0 0 0 1.5v-1.5Zm14 1.5a.75.75 0 0 0 0-1.5v1.5Zm-14 0h14v-1.5H5v1.5Z"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgEject);
export default ForwardRef;
