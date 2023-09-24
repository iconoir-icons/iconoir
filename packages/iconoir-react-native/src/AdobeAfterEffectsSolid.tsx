import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgAdobeAfterEffectsSolid(
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
        d="M21.75 17A4.75 4.75 0 0117 21.75H7A4.75 4.75 0 012.25 17V7A4.75 4.75 0 017 2.25h10A4.75 4.75 0 0121.75 7v10zm-3.5-1a.75.75 0 01-.75.75H16A2.75 2.75 0 0113.25 14v-2a2.75 2.75 0 115.5 0v1a.75.75 0 01-.75.75h-3.25V14c0 .69.56 1.25 1.25 1.25h1.5a.75.75 0 01.75.75zm-1-3.75V12a1.25 1.25 0 10-2.5 0v.25h2.5zM5.298 15.736a.75.75 0 101.404.527l.943-2.513h2.71l.943 2.513a.75.75 0 101.404-.527l-3-8a.75.75 0 00-1.404 0l-3 8zm4.495-3.486H8.207L9 10.136l.793 2.114z"
        fill="currentColor"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgAdobeAfterEffectsSolid);
export default ForwardRef;
