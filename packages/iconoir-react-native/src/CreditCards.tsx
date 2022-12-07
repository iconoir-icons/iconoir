import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";

function SvgCreditCards(
  passedProps: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>
) {
  const context = React.useContext(IconoirContext);
  const props = { ...context, ...passedProps };
  return (
    <Svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      fill="none"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <Path
        d="M22 11.429V19.4a.6.6 0 01-.6.6H5.6a.6.6 0 01-.6-.6v-2.9m17-5.071V8.6a.6.6 0 00-.6-.6H19m3 3.429h-3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19 8v7.9a.6.6 0 01-.6.6H2.6a.6.6 0 01-.6-.6V5.1a.6.6 0 01.6-.6h15.8a.6.6 0 01.6.6V8zm0 0H5.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgCreditCards);
export default ForwardRef;
