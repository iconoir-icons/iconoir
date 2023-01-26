import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgLearning(
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
        d="M6.818 22v-2.857C6.52 16.166 3 14.572 3 10c0-4.57 2.727-8.056 8.182-8 3.927.042 7.636 2.286 7.636 6.858L21 12.286c0 2.286-2.182 2.286-2.182 2.286s.546 5.714-4.364 5.714V22"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11 12a2 2 0 100-4 2 2 0 000 4z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11 13a3 3 0 100-6 3 3 0 000 6z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="0.3 2"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgLearning);
export default ForwardRef;
