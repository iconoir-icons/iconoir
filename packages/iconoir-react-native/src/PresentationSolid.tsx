import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgPresentationSolid(
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
        d="M12.53 17.47a.75.75 0 00-1.06 0l-3.5 3.5a.75.75 0 101.06 1.06L12 19.06l2.97 2.97a.75.75 0 101.06-1.06l-3.5-3.5zM12 1.25a.75.75 0 01.75.75v2a.75.75 0 01-1.5 0V2a.75.75 0 01.75-.75z"
        fill="currentColor"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.4 18.75a1.35 1.35 0 001.35-1.35V4.6a1.35 1.35 0 00-1.35-1.35H2.6A1.35 1.35 0 001.25 4.6v12.8c0 .746.604 1.35 1.35 1.35h18.8zM9.75 12a.75.75 0 00-1.5 0v2a.75.75 0 001.5 0v-2zM12 9.25a.75.75 0 01.75.75v4a.75.75 0 01-1.5 0v-4a.75.75 0 01.75-.75zM15.75 8a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0V8z"
        fill="currentColor"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgPresentationSolid);
export default ForwardRef;
