import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";

function SvgHospital(
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
        d="M6.4 8a.6.6 0 00.6-.6V3.6a.6.6 0 01.6-.6h8.8a.6.6 0 01.6.6v3.8a.6.6 0 00.6.6h1.8a.6.6 0 01.6.6v11.8a.6.6 0 01-.6.6H4.6a.6.6 0 01-.6-.6V8.6a.6.6 0 01.6-.6h1.8z"
        stroke="currentColor"
      />
      <Path
        d="M9.992 8h2m2 0h-2m0 0V6m0 2v2M16 17.01l.01-.011M16 13.01l.01-.011M12 13.01l.01-.011M8 13.01l.01-.011M8 17.01l.01-.011M12 17.01l.01-.011"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgHospital);
export default ForwardRef;
