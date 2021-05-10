import Head from 'next/head'

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Marcelino | Portfolio</title>
            </Head>

            <Navbar />

            <Footer />
        </div>
    )
}
