import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgAdobePhotoshopSolid(
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
        d="M21.75 17A4.75 4.75 0 0117 21.75H7A4.75 4.75 0 012.25 17V7A4.75 4.75 0 017 2.25h10A4.75 4.75 0 0121.75 7v10zM7 16.75a.75.75 0 01-.75-.75V8A.75.75 0 017 7.25h2a2.75 2.75 0 110 5.5H7.75V16a.75.75 0 01-.75.75zm.75-5.5H9a1.25 1.25 0 100-2.5H7.75v2.5zm8.579.085a.75.75 0 101.342-.67 2.56 2.56 0 00-2.29-1.415H15a2.25 2.25 0 000 4.5h.5a.75.75 0 010 1.5h-.382c-.401 0-.768-.227-.947-.585a.75.75 0 00-1.342.67 2.559 2.559 0 002.289 1.415h.382a2.25 2.25 0 100-4.5H15a.75.75 0 010-1.5h.382c.4 0 .768.227.947.585z"
        fill="currentColor"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgAdobePhotoshopSolid);
export default ForwardRef;
