import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgArrowDownRightCircleSolid(
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25zM9.702 8.641a.75.75 0 10-1.06 1.06l4.376 4.377h-3.14a.75.75 0 000 1.5h4.95a.747.747 0 00.75-.75v-4.95a.75.75 0 00-1.5 0v3.14L9.702 8.64z"
        fill="currentColor"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgArrowDownRightCircleSolid);
export default ForwardRef;
