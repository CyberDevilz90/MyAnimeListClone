import { Gabarito } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata = {
  title: "My Anime List Clone",
  description: "Created by Ahmad Mahmudi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${gabarito.className} bg-slate-900`} suppressHydrationWarning={true}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
