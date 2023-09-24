import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgRewindSolid(
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
        d="M21.044 5.704a.6.6 0 01.956.483v11.626a.6.6 0 01-.956.483l-7.889-5.813a.6.6 0 010-.966l7.89-5.813zM10.044 5.704a.6.6 0 01.956.483v11.626a.6.6 0 01-.956.483l-7.888-5.813a.6.6 0 010-.966l7.888-5.813z"
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgRewindSolid);
export default ForwardRef;
