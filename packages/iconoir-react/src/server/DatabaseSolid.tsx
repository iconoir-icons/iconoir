import * as React from "react";
function SvgDatabaseSolid(
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
        d="M5 15a.75.75 0 00-.75.75V18H5c-.75 0-.75.002-.75.002v.035a1.384 1.384 0 00.024.215c.021.128.061.296.136.489.152.39.441.87.977 1.329 1.066.913 3.023 1.68 6.613 1.68 3.59 0 5.547-.767 6.613-1.68.536-.46.825-.939.977-1.33a2.472 2.472 0 00.156-.648 1.36 1.36 0 00.003-.055v-.02l.001-.01v-.005S19.75 18 19 18h.75v-2.25A.75.75 0 0019 15c-.462-.001-.863.285-1.223.573a1.965 1.965 0 01-.088.067c-.69.493-2.256 1.11-5.689 1.11-3.433 0-4.999-.617-5.69-1.11a.635.635 0 01-.073-.071c-.283-.303-.823-.57-1.237-.569z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 9a.75.75 0 00-.75.75V12H5c-.75 0-.75.002-.75.002v.035a1.384 1.384 0 00.024.215c.021.128.061.296.136.489.152.39.441.87.977 1.329 1.066.913 3.023 1.68 6.613 1.68 3.59 0 5.547-.767 6.613-1.68.536-.46.825-.938.977-1.33a2.472 2.472 0 00.156-.648 1.36 1.36 0 00.003-.055v-.02l.001-.01v-.005S19.75 12 19 12h.75V9.75A.75.75 0 0019 9c-.462-.001-.863.285-1.223.573a2.012 2.012 0 01-.088.067c-.69.493-2.256 1.11-5.689 1.11-3.433 0-4.999-.617-5.69-1.11a.634.634 0 01-.073-.071C5.954 9.266 5.414 8.999 5 9z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.387 3.93C6.453 3.018 8.41 2.25 12 2.25c3.59 0 5.547.767 6.613 1.68.536.46.825.939.977 1.33a2.474 2.474 0 01.156.648 1.178 1.178 0 01-.02.344 2.474 2.474 0 01-.136.489c-.152.39-.441.87-.977 1.328C17.547 8.983 15.59 9.75 12 9.75c-3.59 0-5.547-.767-6.613-1.68-.536-.46-.825-.939-.977-1.33a2.478 2.478 0 01-.136-.488 1.436 1.436 0 01-.024-.256c0-.083.01-.166.024-.248.021-.128.061-.295.136-.489.152-.39.441-.87.977-1.328z"
        fill="currentColor"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgDatabaseSolid);
export default ForwardRef;