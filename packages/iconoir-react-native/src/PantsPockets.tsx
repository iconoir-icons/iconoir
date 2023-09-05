import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgPantsPockets(
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
        d="M5.035 3.633a.6.6 0 01.6-.633h12.73a.6.6 0 01.6.633l-.933 16.8a.6.6 0 01-.6.567h-2.898a.6.6 0 01-.596-.53L12.596 9.065c-.083-.706-1.109-.706-1.192 0L10.062 20.47a.6.6 0 01-.596.53H6.568a.6.6 0 01-.6-.567l-.933-16.8z"
        stroke="currentColor"
      />
      <Path
        d="M5 7.5h1.5a2 2 0 002-2V3M18.5 7.5h-1a2 2 0 01-2-2V3"
        stroke="currentColor"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgPantsPockets);
export default ForwardRef;
