import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { getServerSession } from "next-auth";
import SessionProvider from "../app/components/SessionProvider";
import { authOptions } from "~/server/auth";

export const metadata: Metadata = {
  title: "Storyboard",
  description: "Storyboard a tool for business planning.",
  icons: [{ rel: "icon", url: "/logo.svg" }],
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en" className={`${GeistSans.variable} no-scrollbar`}>
      <body>
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  );
}
