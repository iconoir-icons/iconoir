import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";

function SvgTower(
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
        d="M17 22H7a2 2 0 01-2-2v-8.818a.6.6 0 00-.1-.333L3.1 8.15a.6.6 0 01-.1-.333V2.6a.6.6 0 01.6-.6h1.8a.6.6 0 01.6.6v1.8a.6.6 0 00.6.6h2.8a.6.6 0 00.6-.6V2.6a.6.6 0 01.6-.6h2.8a.6.6 0 01.6.6v1.8a.6.6 0 00.6.6h2.8a.6.6 0 00.6-.6V2.6a.6.6 0 01.6-.6h1.8a.6.6 0 01.6.6v5.218a.6.6 0 01-.1.333l-1.8 2.698a.6.6 0 00-.1.333V20a2 2 0 01-2 2z"
        stroke="currentColor"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgTower);
export default ForwardRef;
