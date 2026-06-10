import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Mulish } from "next/font/google";



export const metadata: Metadata = {
  title: 'Wendy\'s Barbershop | Precision Cuts & Classic Shaves',
  description: 'Experience top-notch grooming at Wendy\'s Barbershop at Cut N Go in Manchester, NH. We offer expert haircuts, beard trims, hot lather shaves, and more for all ages.',
  keywords: ["barbershop, haircut, beard trim, fade cut, head shave, kids' cuts, hot lather, Manchester NH, men's grooming, classic shave"],
  openGraph: {
    "title": "Wendy's Barbershop | Precision Cuts & Classic Shaves",
    "description": "Experience top-notch grooming at Wendy's Barbershop at Cut N Go in Manchester, NH. We offer expert haircuts, beard trims, hot lather shaves, and more for all ages.",
    "url": "https://wendysbarbershop.com",
    "siteName": "Wendy's Barbershop",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/male-barber-giving-his-client-nice-haircut_23-2149186489.jpg",
        "alt": "Modern barbershop interior"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Wendy's Barbershop | Precision Cuts & Classic Shaves",
    "description": "Experience top-notch grooming at Wendy's Barbershop at Cut N Go in Manchester, NH. We offer expert haircuts, beard trims, hot lather shaves, and more for all ages.",
    "images": [
      "http://img.b2bpic.net/free-photo/male-barber-giving-his-client-nice-haircut_23-2149186489.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${mulish.variable} ${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
