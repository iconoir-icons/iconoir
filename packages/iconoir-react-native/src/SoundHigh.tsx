import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";

function SvgSoundHigh(
  passedProps: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>
) {
  const context = React.useContext(IconoirContext);
  const props = { ...context, ...passedProps };
  return (
    <Svg
      width="1.5em"
      height="1.5em"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      fill="none"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <Path
        d="M2 14v-4a1 1 0 011-1h2.697a1 1 0 00.555-.168l4.193-2.796A1 1 0 0112 6.87V17.13a1 1 0 01-1.555.832l-4.193-2.795A1 1 0 005.697 15H3a1 1 0 01-1-1z"
        stroke="currentColor"
      />
      <Path
        d="M16.5 7.5S18 9 18 11.5s-1.5 4-1.5 4M19.5 4.5S22 7 22 11.5s-2.5 7-2.5 7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgSoundHigh);
export default ForwardRef;
