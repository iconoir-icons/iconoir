import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgJellyfish(
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
        d="M12 2c4.97 0 9 4.104 9 9.167 0 .068 0 .136-.002.204-.02.954-.865 1.629-1.819 1.629H4.821c-.954 0-1.798-.675-1.819-1.629A9.52 9.52 0 013 11.167C3 6.104 7.03 2 12 2zM6 13l1 1.125c.57.642.57 1.608 0 2.25v0a1.693 1.693 0 000 2.25v0c.57.642.57 1.608 0 2.25L6 22M11 13l1 1.125c.57.642.57 1.608 0 2.25v0a1.693 1.693 0 000 2.25v0c.57.642.57 1.608 0 2.25L11 22M16 13l1 1.125c.57.642.57 1.608 0 2.25v0a1.693 1.693 0 000 2.25v0c.57.642.57 1.608 0 2.25L16 22"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgJellyfish);
export default ForwardRef;
