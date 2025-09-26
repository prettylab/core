import { ReactNode } from "react";
import {
  IconButton as MuiIconButton,
  IconButtonProps,
  Tooltip,
} from "@mui/material";
import Link from "next/link";

interface Props {
  children?: ReactNode;
  label?: any;
  href?: string;
}

export default function IconButton({
  children,
  label,
  href,
  ...props
}: Props & IconButtonProps) {
  let iconButton = <MuiIconButton {...props}>{children}</MuiIconButton>;

  if (label) {
    iconButton = <Tooltip title={label}>{iconButton}</Tooltip>;
  }

  if (href) {
    iconButton = <Link href={href}>{iconButton}</Link>;
  }

  return iconButton;
}
