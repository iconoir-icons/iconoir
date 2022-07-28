import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";

function SvgGoogleHome(
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
        d="M17.708 17A9 9 0 104.291 5a9 9 0 0013.417 12zm0 0H19.5a2.5 2.5 0 012.5 2.5v0a2.5 2.5 0 01-2.5 2.5H17"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <Path
        d="M11 11.01l.01-.011M8 11.01l.01-.011M14 11.01l.01-.011"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgGoogleHome);
export default ForwardRef;
