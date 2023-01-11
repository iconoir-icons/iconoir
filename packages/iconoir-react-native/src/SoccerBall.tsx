import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgSoccerBall(
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
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      fill="none"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <Path
        d="M12 8l3.804 2.764M12 8l-3.804 2.764M12 8V5m3.804 5.764l-1.453 4.472m1.453-4.472L18.5 9.5m-4.149 5.736H9.65m4.702 0L16 17.5m-6.351-2.264l-1.453-4.472m1.453 4.472L8 17.5m.196-6.736L5.5 9.5m0 0L2.05 13M5.5 9.5l-1-4.115m14 4.115l3.45 3.5M18.5 9.5l1-4.115M12 5L8.624 2.584M12 5l3.376-2.416M8 17.5L3.338 17M8 17.5l2.5 4.388M16 17.5l4.662-.5M16 17.5l-2.5 4.388M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgSoccerBall);
export default ForwardRef;
