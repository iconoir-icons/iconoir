import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgAtom = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M4.404 13.61C3.515 13.145 3 12.592 3 12c0-1.657 4.03-3 9-3s9 1.343 9 3c0 .714-.75 1.37-2 1.886M12 11.01l.01-.011"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.883 6c-.005-1.023-.263-1.747-.797-2.02-1.477-.751-4.503 2.23-6.76 6.658-2.256 4.429-2.889 8.629-1.412 9.381.527.269 1.252.061 2.07-.519"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.6 4.252c-.66-.386-1.243-.497-1.686-.271-1.477.752-.844 4.952 1.413 9.38 2.256 4.43 5.282 7.41 6.758 6.658 1.313-.669.959-4.061-.72-7.917"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgAtom);
export default ForwardRef;
