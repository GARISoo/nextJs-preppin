import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Dashboard from "../components/Dashboard/Dashboard";

function MyApp({ Component, pageProps }: AppProps) {
  console.log('App rendered')

  return (
  <Dashboard>
    <Component {...pageProps} />
  </Dashboard>
  )
}

export default MyApp
