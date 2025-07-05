import React, { type ReactNode } from "react";
import { borderWidth, iconPadding, iconWidth } from "../../../resume/constants";

interface SvgIconProps {
  children: ReactNode;
}

const style = {
  backgroundColor: "#313131",
  padding: iconPadding,
  borderRadius: "50%",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  border: `${borderWidth}px solid #ebebeb`,
  height: "fit-content",
  zIndex: 100,
} satisfies React.CSSProperties;

export const SvgIcon = ({ children }: SvgIconProps): React.JSX.Element => {
  return (
    <div style={style}>
      <svg
        fill="#fff"
        height={iconWidth}
        viewBox="0 0 512 512"
        width={iconWidth}
        xmlns="http://www.w3.org/2000/svg"
      >
        {children}
      </svg>
    </div>
  );
};
