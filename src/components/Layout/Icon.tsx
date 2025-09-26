import { IconButtonProps } from "@mui/material";
import IconButton from "@/components/Layout/IconButton";

interface Props {
  color?: string;
}

export default function Icon({
  color,
  children,
  ...props
}: Props & IconButtonProps) {
  return (
    <IconButton
      // @ts-ignore
      color={color || "primary"}
      disableRipple
      {...props}
      sx={{ p: 0, cursor: "default", ...props.sx }}
    >
      {children}
    </IconButton>
  );
}
