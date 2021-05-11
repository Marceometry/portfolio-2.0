import Router from 'next/router'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'

import '../css/global.css'
import '../css/animations.css'

Nprogress.configure({
  showSpinner: false,
  trickleSpeed: 300
})

Router.events.on('routeChangeStart', () => {
  Nprogress.start()
})

Router.events.on('routeChangeComplete', () => {
  Nprogress.done()
})

Router.events.on('routeChangeError', () => {
  Nprogress.done()
})

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp