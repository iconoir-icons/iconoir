import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgBinocular(
  passedProps: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>
) {
  const context = React.useContext(IconoirContext);
  const props = {
    ...context,
    ...passedProps,
  };
  return (
    <Svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      fill="none"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <Path
        d="M21.5 14L20 9s-.5-2-2.5-2c0 0 0-2-2-2s-2 2-2 2h-3s0-2-2-2-2 2-2 2C4.5 7 4 9 4 9l-1.5 5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6 20a4 4 0 100-8 4 4 0 000 8zM18 20a4 4 0 100-8 4 4 0 000 8z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 16a2 2 0 100-4 2 2 0 000 4z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgBinocular);
export default ForwardRef;
