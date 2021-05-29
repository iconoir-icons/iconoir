import * as React from 'react';

function SvgTram(
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  return (
    <svg
      width="1.5em"
      height="1.5em"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <path
        d="M8 20h3l-1.724 3.447a1 1 0 01-.894.553h-.764a1 1 0 01-.894-1.447L8 20zM16 20h-3l1.724 3.447a1 1 0 00.894.553h.764a1 1 0 00.894-1.447L16 20z"
        fill="currentColor"
      />
      <path
        d="M15 16.01l.01-.011M9 16.01l.01-.011M13 6h2a5 5 0 015 5v7a2 2 0 01-2 2H6a2 2 0 01-2-2v-7a5 5 0 015-5h4zm0 0l1-4m0 0h3m-3 0H7m9 9.786v0a.214.214 0 01-.214.214H8.214A.214.214 0 018 11.786v0C8 10.8 8.8 10 9.786 10h4.428C15.2 10 16 10.8 16 11.786z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgTram);
export default ForwardRef;
