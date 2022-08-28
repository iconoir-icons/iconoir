import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";

function SvgThumbsDown(
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
        d="M16.472 3.5H4.1a.6.6 0 00-.6.6v9.8a.6.6 0 00.6.6h2.768a2 2 0 011.715.971l2.71 4.517a1.631 1.631 0 002.961-1.308l-1.022-3.408a.6.6 0 01.574-.772h4.575a2 2 0 001.93-2.526l-1.91-7A2 2 0 0016.473 3.5z"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <Path
        d="M7 14.5v-11"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgThumbsDown);
export default ForwardRef;
