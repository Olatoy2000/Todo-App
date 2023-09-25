import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "To do App",
  description: "Developed by Olatoy consult as a react practice",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
