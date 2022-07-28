import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";

function SvgHesaWarningOutline(
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
        d="M1.173 12.3a.6.6 0 010-.6l5.154-8.926a.6.6 0 01.52-.3h10.307a.6.6 0 01.52.3l5.153 8.926a.6.6 0 010 .6l-5.154 8.926a.6.6 0 01-.52.3H6.847a.6.6 0 01-.52-.3L1.174 12.3zM12 8v4M12 16.01l.01-.011"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgHesaWarningOutline);
export default ForwardRef;
