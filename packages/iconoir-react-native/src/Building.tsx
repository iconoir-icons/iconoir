import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";

function SvgBuilding(
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
        d="M10 9.01l.01-.011M14 9.01l.01-.011M10 13.01l.01-.011M14 13.01l.01-.011M10 17.01l.01-.011M14 17.01l.01-.011M6 20.4V5.6a.6.6 0 01.6-.6H12V3.6a.6.6 0 01.6-.6h4.8a.6.6 0 01.6.6v16.8a.6.6 0 01-.6.6H6.6a.6.6 0 01-.6-.6z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgBuilding);
export default ForwardRef;
