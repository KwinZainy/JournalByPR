import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Journals by PA",
  description: "We create the best journals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className=''
      >
        {children}
      </body>
    </html>
  );
}
