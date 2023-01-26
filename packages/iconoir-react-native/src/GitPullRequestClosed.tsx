import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgGitPullRequestClosed(
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
        d="M18 21a2 2 0 100-4 2 2 0 000 4zM6 21a2 2 0 100-4 2 2 0 000 4zM6 11v6M18 17V7s0-2-2-2h-4M4 7.243L6.121 5.12m0 0L8.243 3M6.12 5.121L4 3m2.121 2.121l2.122 2.122"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgGitPullRequestClosed);
export default ForwardRef;
