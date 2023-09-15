import './globals.css'
import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'

const dmSans = DM_Sans({ subsets: ['latin'], preload: true, })

export const metadata: Metadata = {
  title: {
    default: "MovieBox - The ultimate movie streaming app for HNG internship task 2",
    template: "%s | MovieBox",
  },
  description: "MovieBox is a web app that lets you watch the latest and trending movies for free. It is built with Next.js and Tailwind CSS as part of the HNG internship task 2.",
  keywords: [ "moviebox, hng, internship, task 2, nextjs, tailwindcss, movies, streaming, free"],
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        {children}
      </body>
    </html>
  )
}
