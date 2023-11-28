import type { Metadata } from "next";
import "../styles/globals.css";
import Header from "@/components/header/Header";

export const metadata: Metadata = {
  title: "Full Stack Project",
  description: "My full stack project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
