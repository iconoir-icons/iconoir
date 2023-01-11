import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgBinFull(
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
        d="M19.262 17.038l1.676-12.575a.6.6 0 00-.372-.636L16 2h-5.5l-.682 1.5L5 2 3.21 3.79a.6.6 0 00-.17.504l1.698 12.744a4 4 0 001.98 2.944l.32.183a10 10 0 009.923 0l.32-.183a4 4 0 001.98-2.944zM16 2l-2 5M9 6.5l.818-3M3 5c2.571 2.667 15.429 2.667 18 0"
        stroke="currentColor"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgBinFull);
export default ForwardRef;
