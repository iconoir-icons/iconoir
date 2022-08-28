import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";

function SvgWeight(
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
        d="M16.5 5h3.9a.6.6 0 01.6.6v14.8a.6.6 0 01-.6.6H3.6a.6.6 0 01-.6-.6V5.6a.6.6 0 01.6-.6h3.9"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.279 6.329l.205-1.23a.605.605 0 000-.198l-.206-1.23A2 2 0 0014.307 2H9.694a2 2 0 00-1.973 1.671l-.205 1.23a.6.6 0 000 .198l.205 1.23A2 2 0 009.694 8h4.612a2 2 0 001.973-1.671zM12 8l-1-2.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgWeight);
export default ForwardRef;
