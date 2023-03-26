import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgCoinsSwap(
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
        d="M9.019 9A6.5 6.5 0 1115 14.981M8.5 22a6.5 6.5 0 110-13 6.5 6.5 0 010 13zM22 17a3 3 0 01-3 3h-2m0 0l2-2m-2 2l2 2M2 7a3 3 0 013-3h2m0 0L5 6m2-2L5 2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgCoinsSwap);
export default ForwardRef;
