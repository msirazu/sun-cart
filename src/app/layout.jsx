import { Poppins } from "next/font/google";
import "./globals.css";
import AppProvider from "@/provider/AppProvider";

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin']
})

export const metadata = {
  title: "Sun Cart",
  description: "A modern summer eCommerce platform where users can explore and purchase seasonal products.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${poppins.className}`}>
        <AppProvider>
        {children}
        </AppProvider>
      </body>
    </html>
  );
}