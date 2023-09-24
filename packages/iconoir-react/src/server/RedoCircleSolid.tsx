import * as React from "react";
function SvgRedoCircleSolid(
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
        d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12zm16.321-.89a.76.76 0 01-.05.055l-3.5 3.375a.75.75 0 11-1.042-1.08l2.163-2.085H9.789a2.454 2.454 0 00-.308.035 2.49 2.49 0 00-.737.25 1.744 1.744 0 00-.672.624c-.178.288-.322.71-.322 1.341 0 1.438.567 2.032 1.029 2.312a2.253 2.253 0 001.014.313H10.6a.75.75 0 010 1.5H9.8c-.062 0-.927-.003-1.798-.53-.933-.565-1.752-1.658-1.752-3.595 0-.87.202-1.572.545-2.128.341-.554.796-.92 1.238-1.157A4.007 4.007 0 019.8 9.875H15.233L12.96 7.521a.75.75 0 011.08-1.042l3.498 3.623a.748.748 0 01.033 1.009z"
        fill="currentColor"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgRedoCircleSolid);
export default ForwardRef;
