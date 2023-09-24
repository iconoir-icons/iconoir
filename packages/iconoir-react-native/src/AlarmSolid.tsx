import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgAlarmSolid(
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 3.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 3.25 12 3.25zm0 10.5a.75.75 0 01-.75-.75V8a.75.75 0 011.5 0v4.25H17a.75.75 0 010 1.5h-5zM4.4 3.95a.75.75 0 001.05.15l2-1.5a.75.75 0 10-.9-1.2l-2 1.5a.75.75 0 00-.15 1.05zM19.6 3.95a.75.75 0 01-1.05.15l-2-1.5a.75.75 0 11.9-1.2l2 1.5a.75.75 0 01.15 1.05z"
        fill="currentColor"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgAlarmSolid);
export default ForwardRef;
