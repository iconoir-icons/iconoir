import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";

function SvgTransitionUp(
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
        d="M18 22H6a3 3 0 01-3-3v-2a3 3 0 013-3h12a3 3 0 013 3v2a3 3 0 01-3 3z"
        stroke="currentColor"
      />
      <Path
        d="M3 8V6a4 4 0 014-4h10a4 4 0 014 4v2M12 14V6m0 0L9 9m3-3l3 3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgTransitionUp);
export default ForwardRef;
