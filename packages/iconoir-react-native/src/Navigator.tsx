import * as React from "react";
import Svg, { SvgProps, Circle, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";

function SvgNavigator(
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
        d="M17.873 15.475c.46.87-.437 1.831-1.336 1.432l-4.538-2.017-4.537 2.017c-.9.4-1.797-.562-1.337-1.432l4.959-9.365a1.036 1.036 0 011.831 0l4.958 9.365z"
        stroke="currentColor"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgNavigator);
export default ForwardRef;
