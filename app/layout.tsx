import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Revolve Global | Orbit",
  description: "Orbit organiza seus compromissos com alertas simples, portabilidade e menos tempo de tela.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
