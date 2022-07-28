import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";

function SvgHeptagon(
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
        d="M11.74 1.625a.6.6 0 01.52 0l8.08 3.891a.6.6 0 01.324.407l1.996 8.743a.6.6 0 01-.116.508l-5.591 7.01a.6.6 0 01-.47.227H7.517a.6.6 0 01-.469-.226l-5.591-7.011a.6.6 0 01-.116-.508l1.996-8.743a.6.6 0 01.324-.407l8.08-3.89z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgHeptagon);
export default ForwardRef;
