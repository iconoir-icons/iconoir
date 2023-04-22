import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgGasTankDroplet(
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
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      fill="none"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <Path
        clipRule="evenodd"
        d="M3 7.562A2.562 2.562 0 015.563 5H7V3h5v2h2.002A6.998 6.998 0 0121 11.998v6.442a2.562 2.562 0 01-2.563 2.562H5.563A2.565 2.565 0 013 18.44V7.562z"
        stroke="currentColor"
        strokeMiterlimit={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        clipRule="evenodd"
        d="M12 9s3 2.993 3 4.886c0 1.656-1.345 3-3 3-1.656 0-2.988-1.344-3-3C9.01 11.992 12 9 12 9z"
        stroke="currentColor"
        strokeMiterlimit={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgGasTankDroplet);
export default ForwardRef;
