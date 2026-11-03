import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageLoadingWatcher from "@/components/PageLoadingWatcher";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const isVercel =
  process.env.VERCEL === "1" || Boolean(process.env.NEXT_PUBLIC_VERCEL_ENV);
const basePath = isVercel
  ? ""
  : process.env.NEXT_PUBLIC_BASE_PATH || "/icem-acm";

export const metadata = {
  title: "ICEM ACM Student Chapter | Department of AI & Data Science",
  description:
    "Official portal of the ICEM ACM Student Chapter, Department of AI & Data Science, Indira College of Engineering and Management (ICEM), Pune.",
  icons: {
    icon: `${basePath}/shortLogo.png`,
    shortcut: `${basePath}/shortLogo.png`,
    apple: `${basePath}/shortLogo.png`,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body
        className="flex flex-col min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-[#003c84] selection:text-white"
        suppressHydrationWarning
      >
        <Navbar />
        <PageLoadingWatcher />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
