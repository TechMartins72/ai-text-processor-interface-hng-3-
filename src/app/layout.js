import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppContextProvider from "./Components/AppContext";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Gemini Nano",
  description: "The best translator, language detector and summarizer AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta
          http-equiv="Origin-Trial"
          content={process.env.NEXT_PUBLIC_CHROME_AI_API_TOKEN}
        />
        <meta
          http-equiv="Origin-Trial"
          content={process.env.NEXT_PUBLIC_CHROME_AI_API_TOKEN_2}
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppContextProvider>{children}</AppContextProvider>
      </body>
    </html>
  );
}
