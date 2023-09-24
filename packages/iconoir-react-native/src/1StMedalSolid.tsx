import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function Svg1StMedalSolid(
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
        d="M13.667 1.712a.75.75 0 111.385.576l-1.04 2.5a.75.75 0 11-1.385-.576l1.04-2.5zm3.647-.015a.75.75 0 111.372.606l-3.435 7.78a6.75 6.75 0 11-6.923.252l-4-8a.75.75 0 111.342-.67l4 7.998a6.718 6.718 0 011.875-.398L8.16 2.33a.75.75 0 011.348-.658l3.755 7.697c.204.039.404.087.6.143l3.45-7.814zM12.05 12.9a.75.75 0 011.2.6v5a.75.75 0 01-1.5 0V15l-.8.6a.75.75 0 01-.9-1.2l2-1.5z"
        fill="currentColor"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(Svg1StMedalSolid);
export default ForwardRef;
