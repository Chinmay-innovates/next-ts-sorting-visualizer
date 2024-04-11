import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { SortingAlgorithmProvider } from "@/context/Visualizer";

const inter = Poppins({ subsets: ["latin"],
 weight: ["100", "200", "300", "400",
  "500", "600", "700", "800",] 
});

export const metadata: Metadata = {
  title: "Sorting Visualizer",
  description: "Visualize a selection of different sorting algorithms",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SortingAlgorithmProvider>
          {children}
        </SortingAlgorithmProvider>
      </body>
    </html>
  );
}
