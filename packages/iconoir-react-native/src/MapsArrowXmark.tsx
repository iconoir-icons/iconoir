import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgMapsArrowXmark(
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
        d="M14 17.278l-1.819-.707a.5.5 0 00-.362 0l-7.517 2.923a.5.5 0 01-.617-.711l7.88-14.008a.5.5 0 01.87 0l6.065 10.78M17.121 22.364l2.122-2.121m0 0l2.121-2.122m-2.121 2.122L17.12 18.12m2.122 2.122l2.121 2.121"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgMapsArrowXmark);
export default ForwardRef;
