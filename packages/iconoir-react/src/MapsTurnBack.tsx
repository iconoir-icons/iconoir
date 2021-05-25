import * as React from 'react';

function SvgMapsTurnBack(
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  return (
    <svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <path
        d="M4.365 19.787l7.303-6.492a.5.5 0 01.664 0l7.303 6.492c.38.338.072.962-.427.864l-7.113-1.382a.498.498 0 00-.19 0l-7.113 1.383c-.499.097-.808-.527-.427-.865zM5.5 11V6v0s0-3.5 3-3.5C12 2.5 12 6 12 6v4.5"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 7.5L5.5 11 2 7.5"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgMapsTurnBack);
export default ForwardRef;
