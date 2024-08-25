import type { SvgPropTypes } from "@/types/SvgPropTypes";
import type { FC } from "react";

export const Menu: FC<SvgPropTypes> = (props): JSX.Element => {
  const { className = "w-5 h-5", ...rest } = props;

  return (
    <svg
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 17 14"
      {...rest}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 1h15M1 7h15M1 13h15"
      />
    </svg>
  );
};
