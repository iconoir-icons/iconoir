import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgLaptopWarning(
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
        d="M3.2 14.222V4a2 2 0 012-2h13.6a2 2 0 012 2v10.222m-17.6 0h17.6m-17.6 0l-1.48 5.234A2 2 0 003.644 22h16.712a2 2 0 001.924-2.544l-1.48-5.234"
        stroke="currentColor"
      />
      <Path
        d="M12 5v3M12 11.01l.01-.011M11 19h2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgLaptopWarning);
export default ForwardRef;
