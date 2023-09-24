import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgUndoCircleSolid(
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
        d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12zm7.608-.625l2.163 2.085a.75.75 0 11-1.042 1.08L6.48 11.166a.748.748 0 01-.019-1.063l3.5-3.624a.75.75 0 011.079 1.042L8.767 9.875H14.2v0H14.222a2.02 2.02 0 01.156.008 4.027 4.027 0 011.577.456c.443.237.9.602 1.245 1.155.346.556.551 1.26.551 2.131 0 1.94-.829 3.033-1.763 3.596a3.788 3.788 0 01-1.764.529H14.2L14.2 17v.75h-.8a.75.75 0 010-1.5h.801l.055-.004a2.288 2.288 0 00.957-.31c.466-.281 1.037-.876 1.037-2.311 0-.629-.145-1.05-.324-1.338a1.763 1.763 0 00-.68-.626 2.527 2.527 0 00-1.041-.286H8.858z"
        fill="currentColor"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgUndoCircleSolid);
export default ForwardRef;
