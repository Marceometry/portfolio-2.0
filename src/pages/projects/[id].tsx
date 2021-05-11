import Head from "next/head"
import React from "react"
import Navbar from "../../components/Navbar"
import { Purple, Green } from "../../components/TextColor"

import css from '../../css/project.module.scss'

export default function Project() {
    return (
        <div className={css.container}>
            <Head>
                <title>Marcelino | Nome do Projeto</title>
            </Head>

            <Navbar />

            <main>
            <header className="down">
                <h1>Nome do Projeto</h1>
            </header>

            <img className="focus-in" src="/images/portfolio2.png" alt="Capa do Projeto" />

            <section>
                <div>
                    <h3 className="side-appear-reverse">Descrição do Projeto</h3>
                    <hr className="focus-in" />

                    <p className="swing-in">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula tortor maximus mauris venenatis scelerisque. Nulla tristique semper lectus vitae facilisis. Nunc sodales orci libero, in ultrices nisi euismod at. Proin vel erat mauris. Etiam lorem neque, tempor in ante lobortis, ultricies sagittis ipsum. Praesent non sem id mauris molestie pharetra nec at nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent sit amet ex turpis. Morbi congue lorem a nisi sollicitudin pellentesque. Mauris ac mattis risus. Quisque sit amet lorem ut quam pretium viverra vel eu metus. Nullam eu lacinia risus.
                    </p>
                </div>
            </section>
            </main>
        </div>
    )
}