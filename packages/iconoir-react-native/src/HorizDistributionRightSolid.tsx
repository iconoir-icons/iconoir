import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgHorizDistributionRightSolid(
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
      fill="none"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <Path
        d="M5 7v10h5.4a.6.6 0 00.6-.6V7.6a.6.6 0 00-.6-.6H5z"
        fill="currentColor"
      />
      <Path
        d="M5 17V7m0 10h5.4a.6.6 0 00.6-.6V7.6a.6.6 0 00-.6-.6H5m0 10v3M5 7V4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15 7v10h3.4a.6.6 0 00.6-.6V7.6a.6.6 0 00-.6-.6H15z"
        fill="currentColor"
      />
      <Path
        d="M15 17V7m0 10h3.4a.6.6 0 00.6-.6V7.6a.6.6 0 00-.6-.6H15m0 10v3m0-13V4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgHorizDistributionRightSolid);
export default ForwardRef;
