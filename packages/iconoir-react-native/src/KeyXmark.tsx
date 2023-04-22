import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgKeyXmark(
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
        d="M15.87 20.121L17.993 18m2.121-2.121L17.993 18m0 0l-2.122-2.121M17.992 18l2.121 2.121M12.412 10.343a4 4 0 105.657-5.657 4 4 0 00-5.657 5.657zm0 0l-8.485 8.485 2.121 2.122M6.755 16l2.122 2.121"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgKeyXmark);
export default ForwardRef;
