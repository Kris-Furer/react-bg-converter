import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat= Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "BG Converter",
  description: "Personal project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
