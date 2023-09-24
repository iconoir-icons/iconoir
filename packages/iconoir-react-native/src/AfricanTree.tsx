import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgAfricanTree = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
      <G
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        clipPath="url(#african-tree_svg__a)"
      >
        <Path d="M12 22V12m0-4v4m0 0 3-3M12.424 18.576l6.169-6.169a5.502 5.502 0 0 0-.513-8.234 9.904 9.904 0 0 0-12.16 0 5.502 5.502 0 0 0-.513 8.234l6.169 6.169a.6.6 0 0 0 .848 0Z" />
      </G>
      <Defs>
        <ClipPath id="african-tree_svg__a">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgAfricanTree);
export default ForwardRef;
