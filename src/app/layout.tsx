import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Blog - This is a blog made with Next.js",
  description: "This is a blog made with Next.js",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
