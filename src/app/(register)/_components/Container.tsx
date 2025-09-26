import { ReactNode } from "react";
import Flex from "@/components/Layout/Flex";

type Props = {
  children: ReactNode;
};

export default function Container({ children }: Props) {
  return (
    <Flex center>
      <Flex
        sx={{
          height: "calc(100vh - 128px)",
          my: 8,
          mx: 16,
          boxShadow: "-10px 30px 50px 30px rgba(0, 0, 0, 0.3)",
          width: "100%",
          borderRadius: "24px",
        }}
      >
        {children}
      </Flex>
    </Flex>
  );
}
