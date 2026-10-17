import type { Metadata } from "next";
import "./globals.css";
import Container from "@/components/Container";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: {
    default: "The blog - Este é um blog com Next.js",
    template: "%s | The Blog",
  },
  description: "This is a blog made with Next.js",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <Container>
          <Header />

          {children}
        </Container>
      </body>
    </html>
  );
}
