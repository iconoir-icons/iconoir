import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";

function SvgMapsGoStraight(
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
        d="M4.365 19.787l7.303-6.492a.5.5 0 01.664 0l7.303 6.492c.38.338.072.962-.427.864l-7.113-1.382a.498.498 0 00-.19 0l-7.113 1.383c-.499.097-.808-.527-.427-.865zM12 10.5V4m0 0L8 6.5M12 4l4 2.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgMapsGoStraight);
export default ForwardRef;
