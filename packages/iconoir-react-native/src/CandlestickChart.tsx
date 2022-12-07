import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";

function SvgCandlestickChart(
  passedProps: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>
) {
  const context = React.useContext(IconoirContext);
  const props = { ...context, ...passedProps };
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
        d="M5 16v-2M12 21v-2M19 13v-2M5 8V6M12 13v-2M19 5V3M7 8.6v4.8a.6.6 0 01-.6.6H3.6a.6.6 0 01-.6-.6V8.6a.6.6 0 01.6-.6h2.8a.6.6 0 01.6.6zM14 13.6v4.8a.6.6 0 01-.6.6h-2.8a.6.6 0 01-.6-.6v-4.8a.6.6 0 01.6-.6h2.8a.6.6 0 01.6.6zM21 5.6v4.8a.6.6 0 01-.6.6h-2.8a.6.6 0 01-.6-.6V5.6a.6.6 0 01.6-.6h2.8a.6.6 0 01.6.6z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgCandlestickChart);
export default ForwardRef;
