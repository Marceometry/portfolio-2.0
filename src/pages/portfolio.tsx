import Head from 'next/head'

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

import css from '../css/portfolio.module.scss'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Marcelino | Portfolio</title>
            </Head>

            <div className={css.container}>
                <Navbar />

                <main>
                <header className="down">
                    <h1></h1>
                </header>
                </main>
            </div>

            <Footer />
        </div>
    )
}
