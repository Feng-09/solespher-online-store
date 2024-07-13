import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navBar";
import Footer from "@/components/footer";
import Menu from "@/components/menu";
import { MenuContextProvider } from "@/components/menuContext";
import { CartContextProvider } from "@/components/cartContext";
import { TanstackProvider } from "@/context/tanstackProvider";
import { SearchContextProvider } from "@/components/searchContext";
import Provider from "../../util/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Timbu Cloud shop",
  description: "Discover the latest and greatest in sneaker fashion. From exclusive releases to unbeatable deals, find your perfect pair today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + ' bg-white pt-[8.25rem]'}>
        <TanstackProvider>
          <MenuContextProvider>
            <SearchContextProvider>
              <CartContextProvider>
                <Provider>
                <NavBar />
                <Menu />
                  {children}
                </Provider>
              </CartContextProvider>
            </SearchContextProvider>
          </MenuContextProvider>
          <Footer />
        </TanstackProvider>
      </body>
    </html>
  );
}
