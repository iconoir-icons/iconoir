import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgDatabaseCheckSolid(
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
        d="M13.47 18.47a.75.75 0 011.06 0L17 20.94l4.47-4.47a.75.75 0 111.06 1.06l-5 5a.75.75 0 01-1.06 0l-3-3a.75.75 0 010-1.06z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.591 17.409a2.25 2.25 0 10-3.182 3.182l1.021 1.02c-.713.09-1.519.139-2.43.139-3.59 0-5.547-.767-6.613-1.68-.536-.46-.825-.939-.977-1.33a2.478 2.478 0 01-.156-.648 1.377 1.377 0 01-.003-.055v-.02l-.001-.01v-.005S3.25 18 4 18h-.75v-2.25A.75.75 0 014 15c.414-.001.954.266 1.237.568a.63.63 0 00.074.072c.69.493 2.256 1.11 5.689 1.11 3.433 0 4.999-.617 5.69-1.11.03-.022.059-.044.087-.067.36-.288.761-.574 1.223-.573a.75.75 0 01.75.75v1.318L17 18.818l-1.409-1.41z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 9a.75.75 0 00-.75.75V12H4c-.75 0-.75.002-.75.002v.035a1.384 1.384 0 00.024.215c.021.128.061.296.136.489.152.39.441.87.977 1.329 1.066.913 3.023 1.68 6.613 1.68 3.59 0 5.547-.767 6.613-1.68.536-.46.825-.938.977-1.33a2.472 2.472 0 00.156-.648 1.36 1.36 0 00.003-.055v-.02l.001-.01v-.005S18.75 12 18 12h.75V9.75A.75.75 0 0018 9c-.462-.001-.863.285-1.223.573a2.012 2.012 0 01-.088.067c-.69.493-2.256 1.11-5.689 1.11-3.433 0-4.999-.617-5.69-1.11a.634.634 0 01-.073-.071C4.954 9.266 4.414 8.999 4 9z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.387 3.93C5.453 3.018 7.41 2.25 11 2.25c3.59 0 5.547.767 6.613 1.68.536.46.825.939.977 1.33a2.474 2.474 0 01.156.648 1.178 1.178 0 01-.02.344 2.474 2.474 0 01-.136.489c-.152.39-.441.87-.977 1.328C16.547 8.983 14.59 9.75 11 9.75c-3.59 0-5.547-.767-6.613-1.68-.536-.46-.825-.939-.977-1.33a2.478 2.478 0 01-.136-.488 1.436 1.436 0 01-.024-.256c0-.083.01-.166.024-.248.021-.128.061-.295.136-.489.152-.39.441-.87.977-1.328z"
        fill="currentColor"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgDatabaseCheckSolid);
export default ForwardRef;
