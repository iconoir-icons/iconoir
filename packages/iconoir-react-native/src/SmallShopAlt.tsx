import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgSmallShopAlt(
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
      <Path d="M3 10v9a2 2 0 002 2h14a2 2 0 002-2v-9" stroke="currentColor" />
      <Path
        d="M14.833 21v-6a2 2 0 00-2-2h-2a2 2 0 00-2 2v6"
        stroke="currentColor"
        strokeMiterlimit={16}
      />
      <Path
        d="M21.818 9.364l-1.694-5.929A.6.6 0 0019.547 3H15.5l.475 5.704a.578.578 0 00.278.45c.39.233 1.152.663 1.747.846 1.016.313 2.5.2 3.346.096a.57.57 0 00.472-.732z"
        stroke="currentColor"
      />
      <Path
        d="M14 10c.568-.175 1.288-.574 1.69-.812a.578.578 0 00.28-.549L15.5 3h-7l-.47 5.639a.578.578 0 00.28.55c.402.237 1.122.636 1.69.811 1.493.46 2.507.46 4 0z"
        stroke="currentColor"
      />
      <Path
        d="M3.876 3.435l-1.694 5.93a.57.57 0 00.472.73c.845.105 2.33.217 3.346-.095.595-.183 1.358-.613 1.747-.845a.578.578 0 00.278-.451L8.5 3H4.453a.6.6 0 00-.577.435z"
        stroke="currentColor"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgSmallShopAlt);
export default ForwardRef;
