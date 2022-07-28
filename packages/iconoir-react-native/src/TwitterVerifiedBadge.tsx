import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";

function SvgTwitterVerifiedBadge(
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
        d="M10.521 2.624a2 2 0 012.958 0l1.02 1.12a2 2 0 001.572.651l1.513-.07a2 2 0 012.092 2.09l-.071 1.514a2 2 0 00.651 1.572l1.12 1.02a2 2 0 010 2.958l-1.12 1.02a2 2 0 00-.651 1.572l.07 1.513a2 2 0 01-2.09 2.092l-1.514-.071a2 2 0 00-1.572.651l-1.02 1.12a2 2 0 01-2.958 0l-1.02-1.12a2 2 0 00-1.572-.651l-1.513.07a2 2 0 01-2.092-2.09l.071-1.514a2 2 0 00-.651-1.572l-1.12-1.02a2 2 0 010-2.958l1.12-1.02a2 2 0 00.651-1.572l-.07-1.513a2 2 0 012.09-2.092l1.514.071a2 2 0 001.572-.651l1.02-1.12z"
        stroke="currentColor"
      />
      <Path
        d="M9 12l2 2 4-4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgTwitterVerifiedBadge);
export default ForwardRef;
