import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgPotion(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>
) {
  return (
    <Svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      fill="none"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <Path
        d="M10 4h4v2.568c0 .258.17.487.412.579C22.938 10.37 20.907 22 15 22H9c-5.907 0-7.937-11.63.588-14.853a.629.629 0 00.412-.58V4z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path d="M6 10h12" stroke="currentColor" />
      <Path d="M9 2h6" stroke="currentColor" strokeLinecap="round" />
      <Path
        d="M11.667 13L10 16h4l-1.667 3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgPotion);
export default ForwardRef;
