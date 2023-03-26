import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgCoins(
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
        d="M16 13c-2.761 0-5-1.12-5-2.5S13.239 8 16 8s5 1.12 5 2.5-2.239 2.5-5 2.5zM11 14.5c0 1.38 2.239 2.5 5 2.5s5-1.12 5-2.5M3 9.5C3 10.88 5.239 12 8 12c1.126 0 2.165-.186 3-.5M3 13c0 1.38 2.239 2.5 5 2.5 1.126 0 2.164-.186 3-.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 5.5v11C3 17.88 5.239 19 8 19c1.126 0 2.164-.186 3-.5M13 8.5v-3M11 10.5v8c0 1.38 2.239 2.5 5 2.5s5-1.12 5-2.5v-8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 8C5.239 8 3 6.88 3 5.5S5.239 3 8 3s5 1.12 5 2.5S10.761 8 8 8z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgCoins);
export default ForwardRef;
