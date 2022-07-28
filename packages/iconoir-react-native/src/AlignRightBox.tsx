import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";

function SvgAlignRightBox(
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
        d="M8.006 20.005l.01-.01M4.006 20.005l.01-.01M4.006 16.005l.01-.01M4.006 12.005l.01-.01M4.006 8.005l.01-.01M4.006 4.005l.01-.01M8.006 4.005l.01-.01M12.006 20.005h8v-16h-8v16z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgAlignRightBox);
export default ForwardRef;
