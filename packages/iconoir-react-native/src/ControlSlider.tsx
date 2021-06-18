import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgControlSlider(
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
        d="M6.755 17.283l-1.429-10A2 2 0 017.306 5h3.388a2 2 0 011.98 2.283l-1.429 10A2 2 0 019.265 19h-.53a2 2 0 01-1.98-1.717z"
        stroke="currentColor"
      />
      <Path
        d="M2 12h4m16 0H12"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgControlSlider);
export default ForwardRef;
