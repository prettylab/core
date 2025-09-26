"use client";

import { ReactNode } from "react";
import { ButtonProps, Tooltip } from "@mui/material";
import MuiButton from "@mui/material/Button";
import Link from "next/link";

interface Props {
  children?: ReactNode;
  href?: string;
  tooltip?: string;
  disabledTooltip?: string;
  target?: string;
}

export default function Button({
  children,
  disabled,
  href,
  tooltip,
  disabledTooltip,
  target,
  ...props
}: Props & ButtonProps) {
  let body = (
    <MuiButton disabled={disabled} {...props}>
      {children}
    </MuiButton>
  );

  if (href) {
    body = (
      <Link
        passHref
        href={href}
        onClick={(event) => {
          if (disabled) {
            event.preventDefault();
          }
        }}
        target={target}
      >
        {body}
      </Link>
    );
  }

  if (tooltip) {
    body = (
      <Tooltip title={disabledTooltip && disabled ? disabledTooltip : tooltip}>
        <span>{body}</span>
      </Tooltip>
    );
  }

  if (disabledTooltip && !tooltip && disabled) {
    body = (
      <Tooltip title={disabledTooltip}>
        <span>{body}</span>
      </Tooltip>
    );
  }

  return body;
}
