import {
  borderWidth,
  iconPadding,
  iconWidth,
} from "../../components/resume/constants";
import React, { ReactNode } from "react";

interface SvgIconProps {
  children: ReactNode;
}

const style = {
  position: "relative",
  backgroundColor: "#313131",
  borderRadius: "100%",
  padding: `${iconPadding}px`,
  zIndex: 100,
  minHeight: `${iconWidth}px`,
  minWidth: `${iconWidth}px`,
  border: `${borderWidth}px solid #ebebeb`,
} satisfies React.CSSProperties;

export const SvgIcon = ({ children }: SvgIconProps): React.JSX.Element => {
  return (
    <svg
      style={style}
      fill="#fff"
      height={iconWidth}
      viewBox="0 0 512 512"
      width={iconWidth}
      xmlns="http://www.w3.org/2000/svg">
      {children}
    </svg>
  );
};
