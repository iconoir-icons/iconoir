import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgBitcoinCircleSolid(
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25zm3.75 8.25c0-.763-.182-1.416-.583-1.936-.397-.515-.947-.817-1.532-1a5.837 5.837 0 00-.885-.193V5.5a.75.75 0 00-1.5 0v.758c-.474-.012-.959-.009-1.44-.006l-.214.002A1.353 1.353 0 008.25 7.606v8.788c0 .746.604 1.348 1.346 1.352l.214.002c.48.003.966.006 1.44-.006v.758a.75.75 0 001.5 0v-.87c.313-.047.61-.11.885-.195.585-.182 1.135-.484 1.532-1 .4-.519.583-1.172.583-1.935 0-.83-.231-1.522-.71-2.051a2.73 2.73 0 00-.525-.449 2.73 2.73 0 00.526-.449c.478-.529.709-1.22.709-2.051zm-2.807 1.551c-.55.138-1.205.185-1.942.199a47.475 47.475 0 00-1.251-.004V7.753c1.467-.009 2.625-.01 3.44.244.394.123.638.287.79.483.148.193.27.497.27 1.02 0 .541-.144.848-.322 1.045-.192.212-.502.385-.985.506zM11 12.751c-.416.008-.838.006-1.251.003v3.493c1.467.009 2.625.01 3.44-.244.394-.123.638-.287.79-.483.148-.193.27-.497.27-1.02 0-.541-.144-.848-.322-1.045-.192-.212-.502-.385-.985-.506-.55-.138-1.205-.185-1.942-.199z"
        fill="currentColor"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgBitcoinCircleSolid);
export default ForwardRef;
