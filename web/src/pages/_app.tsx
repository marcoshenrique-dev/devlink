import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <div className="font-karla">
  <Toaster/>
  <Component {...pageProps} />
  </div>)
}
export default MyApp
