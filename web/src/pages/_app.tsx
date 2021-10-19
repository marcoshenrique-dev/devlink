import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'
import { AuthProvider } from '../hooks/authContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <div className="font-karla">
  <AuthProvider>
  <Toaster/>
  <Component {...pageProps} />
  </AuthProvider>
  </div>)
}
export default MyApp
