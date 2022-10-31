import { Menu } from "./Menu";
import type { ReactNode } from "react";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Menu />
      {children}
    </>
  );
}
