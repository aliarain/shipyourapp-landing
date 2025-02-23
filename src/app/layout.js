import {
  Bricolage_Grotesque
} from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

export const metadata = {
  title: "ShipFast - Launch Your Startup in Days",
  description: "The NextJS boilerplate with all you need to build your SaaS",
};

export default function RootLayout({
  children
}) {
  return ( <html lang = "en" >
    <body className = {
      `${bricolage.variable}`} > {children} </body> </html>
  );
}