import type { Metadata } from "next";
import "../../styles/globals.css";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign In page of my full stack project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}
