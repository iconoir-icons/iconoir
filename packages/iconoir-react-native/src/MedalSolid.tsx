import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgMedalSolid(
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
        d="M14.648 1.308a.75.75 0 00-.98.404l-1.04 2.5a.75.75 0 001.384.576l1.04-2.5a.75.75 0 00-.404-.98zm3.655.006a.75.75 0 00-.99.383l-3.449 7.814a6.713 6.713 0 00-.6-.143L9.51 1.671a.75.75 0 00-1.348.658l3.384 6.936a6.718 6.718 0 00-1.875.398l-4-7.998a.75.75 0 10-1.341.67l4 8a6.75 6.75 0 106.922-.252l3.435-7.78a.75.75 0 00-.383-.989z"
        fill="currentColor"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgMedalSolid);
export default ForwardRef;
