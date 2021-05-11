import Head from "next/head"
import React from "react"
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"

import css from '../../css/project.module.scss'

export default function Project() {
    return (
        <div>
            <Head>
                <title>Marcelino | Nome do Projeto</title>
            </Head>

            <div className={css.container}>

                <Navbar />

                <main>
                <header className="down">
                    <h1>Nome do Projeto</h1>
                </header>

                <img className="focus-in" src="/images/portfolio2.png" alt="Capa do Projeto" />

                <div>
                    <section>
                        <h3 className="side-appear-reverse">Descrição do Projeto</h3>
                        <hr className="focus-in" />

                        <p className="swing-in">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula 
                        tortor maximus mauris venenatis scelerisque. Nulla tristique semper lectus vitae facilisis. Nunc sodales 
                        orci libero, in ultrices nisi euismod at. Proin vel erat mauris. Etiam lorem neque, tempor in ante lobortis, 
                        ultricies sagittis ipsum. Praesent non sem id mauris molestie pharetra nec at nunc. Orci varius natoque penatibus 
                        et magnis dis parturient montes, nascetur ridiculus mus. Praesent sit amet ex turpis. Morbi congue lorem a nisi sollicit
                        udin pellentesque. Mauris ac mattis risus. Quisque sit amet lorem ut quam pretium viverra vel eu metus. Nullam eu lacinia risus.
                        </p>
                    </section>
                    
                    <section>
                        <h3 className="side-appear-reverse">Funcionalidades Adicionadas</h3>
                        <hr className="focus-in" />

                        <ul>
                            <li className="swing-in">
                                Exemplo de funcionalidade que eu adicionei que faz tal e tal coisa blá blá blá.
                            </li>
                            <li className="swing-in">
                                Exemplo de funcionalidade que eu adicionei que faz tal e tal coisa blá blá blá.
                            </li>
                            <li className="swing-in">
                                Exemplo de funcionalidade que eu adicionei que faz tal e tal coisa blá blá blá.
                            </li>
                        </ul>
                    </section>
                    
                    <section>
                        <h3 className="side-appear-reverse">Links:</h3>
                        <hr className="focus-in" />

                        <ul id={css.links}>
                            <a><li className="swing-in"> <img src="/brands/github.svg" alt="" /> Repositório no Github </li></a>
                            <a><li className="swing-in"> <img src="/brands/figma.svg" alt="" /> Design no Figma </li></a>
                            <a><li className="swing-in"> <img src="/icons/globe.svg" alt="" /> Acessar na web </li></a>
                        </ul>
                    </section>
                </div>
                </main>
            </div>

            <Footer />
        </div>
    )
}