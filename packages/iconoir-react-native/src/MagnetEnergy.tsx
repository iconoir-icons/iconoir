import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";

function SvgMagnetEnergy(
  passedProps: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>
) {
  const context = React.useContext(IconoirContext);
  const props = { ...context, ...passedProps };
  return (
    <Svg
      width="1.5em"
      strokeWidth={1.5}
      height="1.5em"
      viewBox="0 0 24 24"
      fill="none"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <Path
        d="M5 9v6.74C5 19.199 8.134 22 12 22s7-2.802 7-6.26V9M5 9h3M16 9h3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.074 11.5v3.56c0 1.072-.928 1.94-2.074 1.94s-2.074-.868-2.074-1.94V11.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10 13H5M19 13h-5"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <Path
        d="M11.667 2L10 5h4l-1.667 3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgMagnetEnergy);
export default ForwardRef;
