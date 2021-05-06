import React from 'react'
import Head from 'next/head'
import { Green } from '../components/TextColor'
import css from '../css/landing.module.scss'
import LinkCard from '../components/LinkCard'

export default function Landing() {
  return (
    <div className={css.container}>
      <main>
        <Head>
          <title>Marcelino | FrontEnd Dev</title>
        </Head>

        <header>
          <div>
            <img src="https://github.com/marceometry.png" alt="Marcelino"/>

            <h1>Olá, meu nome é Marcelino Teixeira
            <br/>Eu sou Desenvolvedor FrontEnd.</h1>
          </div>
          
          <p> Tenho 18 anos, domino <Green>HTML</Green> e <Green>CSS</Green> e atualmente estou focado em praticar a 
          biblioteca JavaScript <Green>React</Green> juntamente do framework <Green>Next.js</Green>. </p>
        </header>

        <section>
          <LinkCard link="/about" img="address-card" external="false">Sobre mim</LinkCard>
          
          <LinkCard link="/portfolio" img="journal-whills" external="false">Meu portfólio</LinkCard>
            
          <LinkCard link="/contact" img="envelope" external="false">Contato</LinkCard>
            
          <LinkCard link="https://github.com/marceometry" img="github" external="true">Meu GitHub</LinkCard>
        </section>
      </main>
    </div>
  )
}
