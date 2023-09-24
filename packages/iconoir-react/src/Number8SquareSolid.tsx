import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgNumber8SquareSolid(
  passedProps: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  const context = React.useContext(IconoirContext);
  const props = {
    ...context,
    ...passedProps,
  };
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
        d="M2.25 3.6c0-.746.604-1.35 1.35-1.35h16.8c.746 0 1.35.604 1.35 1.35v16.8a1.35 1.35 0 01-1.35 1.35H3.6a1.35 1.35 0 01-1.35-1.35V3.6zm11.091 9.455c.226.155.409.41.409.945 0 .535-.183.79-.409.945-.272.189-.72.305-1.341.305s-1.069-.116-1.341-.305c-.226-.155-.409-.41-.409-.945 0-.535.183-.79.409-.945.272-.189.72-.305 1.341-.305s1.069.116 1.341.305zM9.576 12c-.534.47-.826 1.15-.826 2 0 .965.376 1.71 1.056 2.18.632.436 1.435.57 2.194.57.76 0 1.562-.134 2.194-.57.68-.47 1.056-1.215 1.056-2.18 0-.85-.292-1.53-.826-2 .534-.47.826-1.15.826-2 0-.965-.376-1.71-1.056-2.18-.632-.436-1.435-.57-2.194-.57-.76 0-1.562.134-2.194.57-.68.47-1.056 1.215-1.056 2.18 0 .85.292 1.53.826 2zM12 11.25c.621 0 1.069-.116 1.341-.305.226-.155.409-.41.409-.945 0-.535-.183-.79-.409-.945-.272-.189-.72-.305-1.341-.305s-1.069.116-1.341.305c-.226.155-.409.41-.409.945 0 .535.183.79.409.945.272.189.72.305 1.341.305z"
        fill="currentColor"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgNumber8SquareSolid);
export default ForwardRef;
