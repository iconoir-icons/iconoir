import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgBeachBagBig(
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
        d="M2.77 12l-.633-3.287A.6.6 0 012.727 8h18.547a.6.6 0 01.589.713L21.23 12M2.769 12h18.462M2.769 12l.616 4m17.846-4l-.616 4m0 0l-.537 3.491a.6.6 0 01-.593.509H4.515a.6.6 0 01-.593-.509L3.385 16m17.23 0H3.385M5 8V6a2 2 0 012-2h10a2 2 0 012 2v2"
        stroke="currentColor"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgBeachBagBig);
export default ForwardRef;
