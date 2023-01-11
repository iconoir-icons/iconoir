import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgBrightness(
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
        d="M12 7l1.53 1.304 2.006.16.16 2.005L17 12l-1.305 1.53-.16 2.006-2.004.16L12 17l-1.53-1.305-2.006-.16-.16-2.004L7 12l1.304-1.53.16-2.006 2.005-.16L12 7z"
        stroke="currentColor"
      />
      <Path
        d="M10.47 15.695L12 17V7l-1.53 1.304-2.006.16-.16 2.005L7 12l1.304 1.53.16 2.006 2.005.16z"
        fill="currentColor"
      />
      <Path
        d="M21 3.6v16.8a.6.6 0 01-.6.6H3.6a.6.6 0 01-.6-.6V3.6a.6.6 0 01.6-.6h16.8a.6.6 0 01.6.6z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgBrightness);
export default ForwardRef;
