import * as React from 'react';

function SvgApple(
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
        d="M12.147 21.265l-.147-.03-.147.03c-2.377.475-4.62.21-6.26-1.1C3.964 18.86 2.75 16.373 2.75 12c0-4.473 1.008-6.29 2.335-6.954.695-.347 1.593-.448 2.735-.317 1.141.132 2.458.488 3.943.983l.26.086.255-.102c2.482-.992 4.713-1.373 6.28-.641 1.47.685 2.692 2.538 2.692 6.945 0 4.374-1.213 6.86-2.843 8.164-1.64 1.312-3.883 1.576-6.26 1.1z"
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path
        d="M12 5.5C12 3 11 2 9 2"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgApple);
export default ForwardRef;
