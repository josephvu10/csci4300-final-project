import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import { UserProvider } from "./context/UserContext";

const inter = Roboto_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "Sound Palette",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserProvider>
      <body className={inter.className}>{children}</body>
      </UserProvider>
    </html>
  );
}
