import { Footer } from "components/Footer/Footer"
import { Navbar } from "components/Navbar/Navbar"
import "styles/tailwind.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
          {children}
        <Footer/>
      </body>
    </html>
  )
}
