import { Inter, Poppins, Space_Grotesk } from "next/font/google";
import "./globals.css";
import LoadingScreen from "@/components/LoadingScreen";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata = {
  title: "Lionden Technologies Pvt. Ltd. | Cybersecurity & IT Solutions",
  description:
    "Lionden Technologies delivers end-to-end IT services, cybersecurity solutions, network optimization, and system integration to help enterprises achieve digital excellence.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} ${spaceGrotesk.variable}`}
    >
      <body className="font-sans">
        <LoadingScreen />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
