import * as React from 'react';

function SvgAppleSwift(
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
        d="M20.457 14.59c.446-1.437 1.451-6.75-5.93-11.49a.636.636 0 00-.808.1.593.593 0 00-.022.79c.03.036 2.75 3.35 1.783 7.135-1.673-1.151-8.324-6.423-8.324-6.423L11 11 3.862 6.4s5.046 6.195 8.134 8.525c-1.495.537-4.743 1.105-9.033-1.561a.637.637 0 00-.771.074.593.593 0 00-.106.743C2.229 14.42 5.668 20 12.939 20c1.995 0 3.16-.568 4.098-1.024.576-.279 1.031-.501 1.528-.501 1.236 0 2.047 1.227 2.054 1.238a.632.632 0 00.583.285.62.62 0 00.526-.37c.893-2.074-.645-4.269-1.271-5.039z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgAppleSwift);
export default ForwardRef;
