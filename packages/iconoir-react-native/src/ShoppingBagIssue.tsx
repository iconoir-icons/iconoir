import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgShoppingBagIssue(
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
        d="M20 14.5l-.74-4.804A2 2 0 0017.285 8H6.716a2 2 0 00-1.977 1.696l-1.385 9A2 2 0 005.331 21H12M17.5 17v2M17.5 22.01l.01-.011M14 5a2 2 0 10-4 0"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgShoppingBagIssue);
export default ForwardRef;
