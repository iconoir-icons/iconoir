import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";

function SvgFlare(
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
        d="M11.456 2.665a.6.6 0 011.088 0l2.864 6.137a.6.6 0 00.29.29l6.137 2.864a.6.6 0 010 1.088l-6.137 2.864a.6.6 0 00-.29.29l-2.864 6.137a.6.6 0 01-1.088 0l-2.864-6.137a.6.6 0 00-.29-.29l-6.137-2.864a.6.6 0 010-1.088l6.137-2.864a.6.6 0 00.29-.29l2.864-6.137z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgFlare);
export default ForwardRef;
