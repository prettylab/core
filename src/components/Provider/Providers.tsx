import { ReactNode } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

type Props = {
  children: ReactNode;
};

export default function Providers({ children }: Props) {
  return (
    <AppRouterCacheProvider
      options={{
        key: "css",
      }}
    >
      {children}
    </AppRouterCacheProvider>
  );
}
