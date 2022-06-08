import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgVegan(
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
        d="M15 11.063C12.53 13.65 10.059 20 10.059 20S6.529 11.062 3 9"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.496 5.577l.426 4.424c.276 2.87-1.875 5.425-4.745 5.702-2.816.27-5.367-1.788-5.638-4.604a5.122 5.122 0 014.608-5.59l4.716-.454a.58.58 0 01.633.522z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgVegan);
export default ForwardRef;
