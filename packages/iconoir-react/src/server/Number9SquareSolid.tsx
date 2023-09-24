import * as React from "react";
function SvgNumber9SquareSolid(
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.25 3.6c0-.746.604-1.35 1.35-1.35h16.8c.746 0 1.35.604 1.35 1.35v16.8a1.35 1.35 0 01-1.35 1.35H3.6a1.35 1.35 0 01-1.35-1.35V3.6zm8.409 7.845c-.226-.155-.409-.41-.409-.945 0-.861.236-1.237.46-1.423.254-.21.666-.327 1.29-.327s1.036.118 1.29.327c.224.186.46.562.46 1.423 0 .535-.183.79-.409.945-.272.189-.72.305-1.341.305s-1.069-.116-1.341-.305zm-.853 1.235c.632.436 1.435.57 2.194.57.567 0 1.159-.075 1.685-.294a.1.1 0 000 .005c-.064.554-.185.957-.378 1.258-.348.54-1.126 1.031-3.307 1.031a.75.75 0 000 1.5c2.319 0 3.79-.51 4.568-1.72.37-.573.53-1.232.607-1.897.075-.653.075-1.376.075-2.105V11a.75.75 0 00-.017-.158c.011-.11.017-.225.017-.342 0-1.139-.323-2.013-1.004-2.577-.651-.54-1.49-.673-2.246-.673-.757 0-1.595.132-2.246.673-.68.564-1.004 1.438-1.004 2.577 0 .965.376 1.71 1.056 2.18z"
        fill="currentColor"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgNumber9SquareSolid);
export default ForwardRef;
