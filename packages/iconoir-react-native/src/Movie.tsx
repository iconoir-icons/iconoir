import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";

function SvgMovie(
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
        d="M7 8.01l.01-.011M17 8.01l.01-.011M7 12.01l.01-.011M17 12.01l.01-.011M7 16.01l.01-.011M17 16.01l.01-.011M7 2H3.6a.6.6 0 00-.6.6v18.8a.6.6 0 00.6.6H7M7 2v2m0-2h10m0 0h3.4a.6.6 0 01.6.6v18.8a.6.6 0 01-.6.6H17m0-20v2m0 18v-2m0 2H7m0 0v-2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgMovie);
export default ForwardRef;
