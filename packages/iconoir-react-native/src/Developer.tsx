import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgDeveloper(
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
        d="M6.818 22v-2.857C6.662 17.592 5.633 16.416 4.682 15m9.772 7v-1.714c4.91 0 4.364-5.714 4.364-5.714s2.182 0 2.182-2.286l-2.182-3.428c0-4.572-3.709-6.816-7.636-6.857-2.2-.023-3.957.53-5.27 1.499"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13 7l2 2.5-2 2.5M5 7L3 9.5 5 12M10 6l-2 7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgDeveloper);
export default ForwardRef;
