import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PrimePulse",
  description: "Live news feed using newsapi.org written in Next.js, Tailwind CSS, and Daisyui.", 
  image: "/images/site-icon.webp",
  keywords: "Next.js, Tailwind CSS, DaisyUI, NewsAPI, News, Feed, Live, API, News Feed, News App, News Website, News Portal, News Aggregator, News Aggregator App, News Aggregator Website, News Aggregator Portal, News Aggregator API, News Aggregator Feed, News Aggregator Live Feed, News Aggregator Live News Feed, News Aggregator Live News Feed App, News Aggregator Live News Feed Website, News Aggregator Live News Feed Portal, News Aggregator Live News Feed API, News Aggregator Live News Feed Feed, News Aggregator Live News Feed Live, News Aggregator Live News Feed Live Feed, News Aggregator Live News Feed Live News Feed, News Aggregator Live News Feed Live News Feed App, News Aggregator Live News Feed Live News Feed Website, News Aggregator Live News Feed Live News Feed Portal, News Aggregator Live News Feed Live News Feed API, News Aggregator Live News Feed Live News Feed Feed, News Aggregator Live News Feed Live News Feed Live, News Aggregator Live News Feed Live News Feed Live Feed, News Aggregator Live News Feed Live News Feed Live News Feed, News Aggregator Live News Feed Live News Feed Live News Feed App, News Aggregator Live News Feed Live News Feed Live News Feed Website, News Aggregator Live News Feed Live News Feed Live News Feed Portal, News Aggregator Live News Feed Live News Feed Live News Feed API, News Aggregator Live News Feed Live News Feed Live News Feed Feed, News Aggregator Live News Feed Live News Feed Live News Feed Live, News Aggregator Live News Feed Live News Feed Live News Feed Live Feed, News Aggregator Live News Feed Live News Feed Live News Feed Live News Feed, News Aggregator Live News Feed Live News Feed Live News Feed Live News Feed App, News Aggregator Live News Feed Live News Feed Live News Feed Live News Feed Website, News Aggregator Live News Feed Live News Feed Live News Feed Live News Feed Portal, News Aggregator Live News Feed Live News Feed Live News Feed Live News Feed API, News Aggregator Live News Feed Live News Feed Live News Feed Live News Feed Feed, News Aggregator Live News Feed Live News Feed Live News Feed Live News Feed Live, News Aggregator Live News Feed Live News Feed Live News Feed Live News Feed Live Feed, News Aggregator Live News Feed Live News Feed Live News Feed Live News Feed Live News Feed, News Aggregator Live News Feed Live News Feed Live News Feed",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
