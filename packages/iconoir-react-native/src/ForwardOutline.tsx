import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";

function SvgForwardOutline(
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
        d="M2.956 5.704A.6.6 0 002 6.187v11.626a.6.6 0 00.956.483l7.889-5.813a.6.6 0 000-.966l-7.89-5.813zM13.956 5.704a.6.6 0 00-.956.483v11.626a.6.6 0 00.956.483l7.889-5.813a.6.6 0 000-.966l-7.89-5.813z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgForwardOutline);
export default ForwardRef;
