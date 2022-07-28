import * as React from "react";
import Svg, { SvgProps, Circle, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";

function SvgNavigatorAlt(
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
      <Circle cx={12} cy={12} r={10} stroke="currentColor" />
      <Path
        clipRule="evenodd"
        d="M13.93 17.869c-.322.93-1.637.929-1.958-.001l-1.62-4.694-4.57-1.943c-.905-.385-.814-1.698.136-1.954L16.15 6.516a1.036 1.036 0 011.249 1.34L13.93 17.868z"
        stroke="currentColor"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgNavigatorAlt);
export default ForwardRef;
