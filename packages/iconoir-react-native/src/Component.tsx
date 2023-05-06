import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgComponent(
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
        d="M5.212 15.111l-2.687-2.687a.6.6 0 010-.848l2.687-2.687a.6.6 0 01.848 0l2.687 2.687a.6.6 0 010 .848L6.06 15.111a.6.6 0 01-.848 0zM11.576 21.475l-2.687-2.687a.6.6 0 010-.849l2.687-2.687a.6.6 0 01.848 0l2.687 2.687a.6.6 0 010 .849l-2.687 2.687a.6.6 0 01-.848 0zM11.576 8.748L8.889 6.06a.6.6 0 010-.848l2.687-2.687a.6.6 0 01.848 0l2.687 2.687a.6.6 0 010 .848l-2.687 2.688a.6.6 0 01-.848 0zM17.94 15.111l-2.687-2.687a.6.6 0 010-.848l2.687-2.687a.6.6 0 01.848 0l2.687 2.687a.6.6 0 010 .848l-2.687 2.687a.6.6 0 01-.848 0z"
        stroke="currentColor"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgComponent);
export default ForwardRef;
