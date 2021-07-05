import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgWindows(
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
        d="M4 16.986V7.014a.6.6 0 01.507-.593l14.8-2.313a.6.6 0 01.693.593v14.598a.6.6 0 01-.693.593l-14.8-2.313A.6.6 0 014 16.986zM4 12h16M10.5 5.5v13"
        stroke="currentColor"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgWindows);
export default ForwardRef;
