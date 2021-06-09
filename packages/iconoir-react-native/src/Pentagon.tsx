import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgPentagon(
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
        d="M11.647 2.256a.6.6 0 01.706 0l9.756 7.089a.6.6 0 01.218.67L18.6 21.485a.6.6 0 01-.57.414H5.97a.6.6 0 01-.57-.414l-3.727-11.47a.6.6 0 01.218-.67l9.756-7.089z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgPentagon);
export default ForwardRef;
