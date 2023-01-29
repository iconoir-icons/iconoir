import * as React from "react";
function SvgChatBubbleTranslate(
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
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5L2.5 21.5l4.5-.838A9.955 9.955 0 0012 22z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 8.517h5m5 0h-1.786m-3.214 0h3.214m-3.214 0V7m3.214 1.517c-.586 2.075-1.813 4.037-3.214 5.76M8.429 18C9.56 16.97 10.84 15.705 12 14.277m0 0c-.714-.829-1.714-2.17-2-2.777m2 2.777l2.143 2.206"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgChatBubbleTranslate);
export default ForwardRef;
