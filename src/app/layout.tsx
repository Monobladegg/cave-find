import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Подземелья",
  description: `Из игры "Genshin Impact"`,
};

import "./globals.scss";

export type props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: props) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
