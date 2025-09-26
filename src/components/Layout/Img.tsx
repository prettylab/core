import { Box, SxProps } from "@mui/material";
import { ImgHTMLAttributes } from "react";

interface Props {
  src: string;
  alt: string;
  sx?: SxProps;
  cover?: boolean;
  lazyLoading?: boolean;
  useAsBackground?: boolean;
  mimeType?: string;
}

export default function Img({
  src,
  alt,
  sx,
  cover,
  lazyLoading,
  useAsBackground,
  mimeType = "image/png",
  ...props
}: Props & ImgHTMLAttributes<HTMLImageElement>) {
  const isBase64 = (str: string) => {
    const base64Pattern =
      /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/;
    return base64Pattern.test(str);
  };

  const addBase64Prefix = (str: string) => {
    return `data:${mimeType};base64,${str}`;
  };

  if (!src) {
    return <Box sx={{ width: "100%", height: "100%", ...sx }} />;
  }

  const isBase64Image = isBase64(src);
  const imageUrl = isBase64Image ? addBase64Prefix(src) : src;

  if (useAsBackground) {
    return (
      <Box
        sx={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: cover ? "cover" : "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100%",
          ...sx,
        }}
        {...props}
      />
    );
  }

  return (
    <Box
      component="img"
      src={imageUrl}
      alt={alt}
      width={"100%"}
      height={"100%"}
      sx={{
        width: "100%",
        height: "100%",
        objectFit: cover ? "cover" : "contain",
        ...sx,
      }}
      loading={lazyLoading ? "lazy" : "eager"}
      {...props}
    />
  );
}
