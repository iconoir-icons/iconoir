import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgServer(
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
        d="M6 18.01l.01-.011M6 6.01l.01-.011"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 9.4V2.6a.6.6 0 01.6-.6h18.8a.6.6 0 01.6.6v6.8a.6.6 0 01-.6.6H2.6a.6.6 0 01-.6-.6zM2 21.4v-6.8a.6.6 0 01.6-.6h18.8a.6.6 0 01.6.6v6.8a.6.6 0 01-.6.6H2.6a.6.6 0 01-.6-.6z"
        stroke="currentColor"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgServer);
export default ForwardRef;
