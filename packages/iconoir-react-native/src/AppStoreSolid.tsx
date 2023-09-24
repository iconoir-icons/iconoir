import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgAppStoreSolid(
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
        d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12zm8.847-7.133a.75.75 0 011.036.23L12 6.46l.867-1.363a.75.75 0 111.266.806l-1.244 1.954 3.432 5.393H17.5a.75.75 0 010 1.5h-.225l.858 1.347a.75.75 0 11-1.266.806L12 9.254 9.457 13.25H13.5a.75.75 0 010 1.5H8.503l-1.37 2.153a.75.75 0 01-1.266-.806l.858-1.347H6.5a.75.75 0 010-1.5h1.18l3.431-5.393-1.244-1.954a.75.75 0 01.23-1.036z"
        fill="currentColor"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgAppStoreSolid);
export default ForwardRef;
