import './globals.css'
import { Inter } from 'next/font/google'
import { Open_Sans } from 'next/font/google'
import Navbar from "app/(shared)/Navbar";
import Footer from "app/(shared)/Footer";
const inter = Inter({ subsets: ['latin'] })

const openSans = Open_Sans({
  subsets:["latin"]
})
export const metadata = {
  title: 'Blog AI app',
  description: 'Blog built in nextJs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={openSans.className}>
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
