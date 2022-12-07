import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";

function SvgBrainWarning(
  passedProps: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>
) {
  const context = React.useContext(IconoirContext);
  const props = { ...context, ...passedProps };
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
        d="M7 14a3 3 0 101 5.83M4.264 15.605a4 4 0 01-.874-6.636M3.42 8.888A2.5 2.5 0 017 5.5M12 4.5a2.5 2.5 0 10-4.762 1.065M8 20a2 2 0 104 0M17 14a3 3 0 11-1 5.83M19.736 15.605a4 4 0 00.874-6.636M20.58 8.888A2.5 2.5 0 0017 5.5M12 4.5a2.5 2.5 0 114.762 1.065M16 20a2 2 0 11-4 0M12 8v4M12 16.01l.01-.011"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgBrainWarning);
export default ForwardRef;
