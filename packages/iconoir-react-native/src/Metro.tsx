import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgMetro(
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
        d="M8.5 20h3l-1.724 3.447a1 1 0 01-.894.553h-.764a1 1 0 01-.894-1.447L8.5 20zM15.5 20h-3l1.724 3.447a1 1 0 00.894.553h.764a1 1 0 00.894-1.447L15.5 20z"
        fill="currentColor"
      />
      <Path
        d="M14 16.01l.01-.011M10 16.01l.01-.011M22 12v3a5 5 0 01-5 5H7a5 5 0 01-5-5v-3C2 6.477 6.477 2 12 2s10 4.477 10 10z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18 12v3a5 5 0 01-5 5h-2a5 5 0 01-5-5v-3a5 5 0 015-5h2a5 5 0 015 5z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.786 10h.428C13.2 10 14 10.8 14 11.786a.214.214 0 01-.214.214h-3.572a.214.214 0 01-.214-.214C10 10.8 10.8 10 11.786 10z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgMetro);
export default ForwardRef;
