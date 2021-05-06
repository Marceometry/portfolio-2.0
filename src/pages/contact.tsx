import React from 'react'
import Head from 'next/head'

import Navbar from '../components/Navbar'
import Profile from '../components/Profile'
import Footer from '../components/Footer'
import { Purple } from '../components/TextColor'

import css from '../css/base.module.scss'

export default function About() {
    return (
        <div className={css.container}>
            <Head>
                <title>Marcelino | Contato</title>
            </Head>

            <Navbar />

            <main>
                <Profile />

                <section>
                    <header>
                        <h2> Contato </h2>
                        <hr/>
                    </header>

                    <article>
                        <p> Email: <Purple> marceometry@gmail.com </Purple></p>

                        <p> Whatsapp: <Purple> +55 51 99579-4033 </Purple></p>
                    </article>
                </section>
            </main>

            <Footer />
        </div>
    )
}