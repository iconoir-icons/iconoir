import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgDewPoint(
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
        d="M5 12a5 5 0 106 0M5 12V3h6v9M11 3h2M11 6h2M11 9h2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 14a2 2 0 100 4 2 2 0 000-4zm0 0V9"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        clipRule="evenodd"
        d="M19 3s3 2.993 3 4.887c0 1.655-1.345 3-3 3-1.656 0-2.988-1.345-3-3C16.01 5.992 19 3 19 3z"
        stroke="currentColor"
        strokeMiterlimit={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgDewPoint);
export default ForwardRef;
