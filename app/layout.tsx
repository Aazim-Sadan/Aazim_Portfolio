import type React from "react"
import type { Metadata } from "next/types"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import AdHeader from "@/components/ad-header"
import { Suspense } from "react"
import Loading from "@/components/loading"
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Aazim Sadan - Software Developer",
  description: "Portfolio website of Aazim Sadan, a Software Developer",
  icons: {
    icon: [
      { url: '/aazim.png', sizes: 'any', type: 'image/x-icon' },
      { url: '/aazim.png', sizes: '16x16', type: 'image/png' },
      { url: '/aazim.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/aazim.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <AdHeader
            title="🚀 AcaMock_AI"
            description="Level Up Your Job Prep with Mock Interviews"
            buttonText="View"
            href="https://acemock-ai-react.web.app"
            isExternal={true}
            dismissible={true}
          />
          <Suspense fallback={<Loading />}>
            <Analytics/>
            <Header />
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">{children}</main>
            <footer className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} Aazim. All rights reserved.
            </footer>
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}