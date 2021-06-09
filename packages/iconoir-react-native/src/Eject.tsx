import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgEject(
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
        d="M5 14l-.592-.46A.75.75 0 005 14.75V14zm14 0v.75a.75.75 0 00.592-1.21L19 14zm-14 .75h14v-1.5H5v1.5zm5.619-9.196L4.408 13.54l1.184.92 6.21-7.985-1.183-.92zm8.973 7.986l-6.21-7.986-1.185.921 6.211 7.986 1.184-.921zm-7.79-7.065a.25.25 0 01.395 0l1.184-.92c-.7-.901-2.062-.901-2.762 0l1.184.92zM5 17.25a.75.75 0 000 1.5v-1.5zm14 1.5a.75.75 0 000-1.5v1.5zm-14 0h14v-1.5H5v1.5z"
        fill="currentColor"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgEject);
export default ForwardRef;
