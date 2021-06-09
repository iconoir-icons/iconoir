import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';

function SvgHexagonAlt(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>
) {
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
      <G clipPath="url(#hexagon-alt_svg__clip0)">
        <Path
          d="M6.327 2.774a.6.6 0 01.52-.3h10.307a.6.6 0 01.52.3l5.153 8.926a.6.6 0 010 .6l-5.154 8.926a.6.6 0 01-.52.3H6.847a.6.6 0 01-.52-.3L1.174 12.3a.6.6 0 010-.6l5.154-8.926z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="hexagon-alt_svg__clip0">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgHexagonAlt);
export default ForwardRef;
