import Flex from "@/components/Layout/Flex";
import { Typography } from "@mui/material";
import Form from "@/app/(register)/_components/Content/Form/Form";

export default function Content() {
  return (
    <Flex
      column
      sx={{
        backgroundColor: "white",
        borderTopRightRadius: "24px",
        borderBottomRightRadius: "24px",
        flex: 1,
        py: 8,
        px: 12,
        overflowY: "auto",
      }}
    >
      <Typography
        sx={{
          fontSize: 48,
          textTransform: "uppercase",
          fontWeight: "bold",
        }}
      >
        Rejestracja
      </Typography>
      <Form />
    </Flex>
  );
}
