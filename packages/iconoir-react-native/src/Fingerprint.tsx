import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgFingerprint(
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
        d="M7 3.516A9.004 9.004 0 0120.648 8.5M21 22v-8M3 22V11c0-1.052.18-2.062.512-3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18 22V11.3C18 7.82 15.314 5 12 5s-6 2.82-6 6.3V14M6 22v-4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 22V11.15C9 9.41 10.343 8 12 8c.865 0 1.645.385 2.193 1M15 22v-8M12 22v-3.5M12 11v3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgFingerprint);
export default ForwardRef;
