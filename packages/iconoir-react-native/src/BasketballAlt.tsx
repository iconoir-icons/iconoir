import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgBasketballAlt = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        clipPath="url(#basketball-alt_svg__a)"
      >
        <Path d="M17.736 20.192c4.524-3.168 5.623-9.404 2.455-13.928C17.024 1.74 10.788.641 6.264 3.81 1.74 6.976.641 13.212 3.808 17.736c3.168 4.524 9.404 5.623 13.928 2.456ZM17.736 20.192 6.264 3.809" />
        <Path d="M19.577 5.473c-3.77 5.896-8.508 9.214-16.302 11.415" />
        <Path d="M13.06 2.056c.413 5.24 3.392 9.494 8.646 12.35M2.293 9.595c4.783 2.18 7.761 6.434 8.647 12.349" />
      </G>
      <Defs>
        <ClipPath id="basketball-alt_svg__a">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgBasketballAlt);
export default ForwardRef;
