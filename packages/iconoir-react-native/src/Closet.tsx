import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgCloset(
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
        d="M9 14H8M16 14h-1"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 2h8.4a.6.6 0 01.6.6v18.8a.6.6 0 01-.6.6H12m0-20H3.6a.6.6 0 00-.6.6v18.8a.6.6 0 00.6.6H12m0-20v20"
        stroke="currentColor"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgCloset);
export default ForwardRef;
