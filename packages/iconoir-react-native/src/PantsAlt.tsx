import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgPantsAlt(
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
        d="M12 19h4.436a.6.6 0 00.6-.563l.924-14.8A.6.6 0 0017.361 3H6.634a.6.6 0 00-.599.633l.934 16.8a.6.6 0 00.599.567H11.4a.6.6 0 00.6-.6V8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgPantsAlt);
export default ForwardRef;
