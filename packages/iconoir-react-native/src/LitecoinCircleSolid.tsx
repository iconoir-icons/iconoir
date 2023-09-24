import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgLitecoinCircleSolid(
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
      viewBox="0 0 24 24"
      fill="none"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12zm9.25-5.75a.75.75 0 01.75.75v3.957l1.445-.642a.75.75 0 01.61 1.37l-2.055.913v3.652h4.25a.75.75 0 010 1.5h-4.4a1.35 1.35 0 01-1.35-1.35v-3.135l-.945.42a.75.75 0 01-.61-1.37l1.555-.691V7a.75.75 0 01.75-.75z"
        fill="currentColor"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgLitecoinCircleSolid);
export default ForwardRef;
