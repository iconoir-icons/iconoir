import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";

function SvgAutoFlash(
  passedProps: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>
) {
  const context = React.useContext(IconoirContext);
  const props = { ...context, ...passedProps };
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
        d="M3.426 13.006c-.057 0-.057 0-.115-.006-.633-.07-1.095-.698-1.032-1.402l.61-7.445C2.95 3.5 3.445 3 4.037 3H8.5c.128 0 .254.023.375.07.602.23.922.958.715 1.627l-1.49 4.105h2.748c.203 0 .402.06.578.173.55.356.738 1.14.418 1.75-.414.816-4.58 7.816-5.926 10.075-.107.18-.381.092-.37-.117L6 13l-2.573.006zM16 9.5l.692-1.5M22 9.5L21.308 8m0 0L19 3l-2.308 5m4.616 0h-4.616"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgAutoFlash);
export default ForwardRef;
