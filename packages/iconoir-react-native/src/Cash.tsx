import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";

function SvgCash(
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
        d="M14 5h7.4a.6.6 0 01.6.6v12.8a.6.6 0 01-.6.6H14m0-14v14m0-14h-4m4 14h-4m0 0H2.6a.6.6 0 01-.6-.6V5.6a.6.6 0 01.6-.6H10m0 14V5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 9.849c0-.414-.413-.699-.75-.457A2.996 2.996 0 005 11.829c0 1.004.493 1.893 1.25 2.438.337.242.75-.043.75-.457V9.85zM17 9.849c0-.414.413-.699.75-.457A2.996 2.996 0 0119 11.829a2.996 2.996 0 01-1.25 2.438c-.337.242-.75-.043-.75-.457V9.85z"
        fill="currentColor"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgCash);
export default ForwardRef;
