import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";

function SvgEnlargeRoundArrow(
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
        d="M8.5 9.5L6 12l2.5 2.5M15.5 9.5L18 12l-2.5 2.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 15V9a4 4 0 014-4h12a4 4 0 014 4v6a4 4 0 01-4 4H6a4 4 0 01-4-4z"
        stroke="currentColor"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgEnlargeRoundArrow);
export default ForwardRef;
