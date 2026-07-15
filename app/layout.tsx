import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ryo's Profile",
  description: "りょうのプロフィールページです",
  themeColor: "#a078ff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
