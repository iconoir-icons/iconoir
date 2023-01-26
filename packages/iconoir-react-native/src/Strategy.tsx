import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgStrategy(
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
        d="M6 20.5C7 11 11.5 8 20 6M15.909 3.81L20.395 5.9l-2.092 4.486M5 7a2 2 0 100-4 2 2 0 000 4zM16 20.243l2.121-2.122m0 0L20.243 16m-2.122 2.121L16 16m2.121 2.121l2.122 2.122"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgStrategy);
export default ForwardRef;
