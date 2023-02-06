import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgKeyframeAlignVertical(
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
        d="M16.68 12.384l-4.22 5.063a.6.6 0 01-.92 0l-4.22-5.063a.6.6 0 010-.768l4.22-5.063a.6.6 0 01.92 0l4.22 5.063a.6.6 0 010 .768zM12 22v-2M12 4V2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgKeyframeAlignVertical);
export default ForwardRef;
