import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NILO",
  description: "Te ayudo a encontrar lo que buscas y elegir con más confianza.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-MX">
      <body>{children}</body>
    </html>
  );
}
