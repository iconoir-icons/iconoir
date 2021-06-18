import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgShieldSearch(
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
      <Path
        d="M13.5 13l1.5 1.5M9 11a2.5 2.5 0 105 0 2.5 2.5 0 00-5 0z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5 18L3.13 4.913a.996.996 0 01.774-1.114l7.662-1.703a2 2 0 01.868 0L20.096 3.8c.51.113.848.596.774 1.114L19 18c-.07.495-.5 3.5-7 3.5S5.07 18.495 5 18z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgShieldSearch);
export default ForwardRef;
