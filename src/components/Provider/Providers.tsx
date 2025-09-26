import { ReactNode } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import ThemeProvider from "@/components/Provider/ThemeProvider";

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
      <ThemeProvider>{children}</ThemeProvider>
    </AppRouterCacheProvider>
  );
}
