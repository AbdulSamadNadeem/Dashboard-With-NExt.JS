"use client"
import "./globals.css";
import Context from "@/context/products-context/context";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Context>
        {children}

        </Context>
        
      </body>
    </html>
  );
}
