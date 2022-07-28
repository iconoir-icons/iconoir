import * as React from "react";
import Svg, { SvgProps, Path, Rect } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";

function SvgCreditCard2(
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
        d="M2 9V5.6a.6.6 0 01.6-.6h18.8a.6.6 0 01.6.6v12.8a.6.6 0 01-.6.6H2.6a.6.6 0 01-.6-.6V9zm0 0h14"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Rect x={15} y={12} width={4} height={4} rx={0.6} fill="currentColor" />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgCreditCard2);
export default ForwardRef;
