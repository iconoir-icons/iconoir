import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgPanoramaReduce(
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
        d="M21 6.862v10.276a.615.615 0 01-.811.58C18.546 17.165 14.749 16 12 16c-2.749 0-6.546 1.166-8.189 1.717a.615.615 0 01-.811-.58V6.863c0-.418.415-.712.811-.58C5.454 6.835 9.251 8 12 8c2.749 0 6.546-1.166 8.189-1.717a.615.615 0 01.811.58z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgPanoramaReduce);
export default ForwardRef;
