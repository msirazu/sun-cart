import { Poppins } from "next/font/google";
import "./globals.css";

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
    <html lang="en">
      <body className={`${poppins.className}`}>
        {children}
      </body>
    </html>
  );
}