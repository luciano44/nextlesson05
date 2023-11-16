import { Inter } from "next/font/google"
const inter = Inter({ subsets: ["latin"] })

function page() {
  return <main className={inter.className}></main>
}
export default page
