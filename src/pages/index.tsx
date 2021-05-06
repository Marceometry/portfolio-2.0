import React from 'react'
import Head from 'next/head'
import { Green, Purple } from '../components/TextColor'
import landing from '../css/landing.module.scss'
import about from '../css/components/about.module.scss'

export default function Landing() {
  return (
    <div>
      <div className={landing.container}>
        <main>
          <Head>
            <title>Marcelino | FrontEnd Dev</title>
          </Head>

          <nav>
            <ul>
              <li>CONTATO</li>
              <li>PORTFOLIO</li>
              <li>TECNOLOGIAS</li>
            </ul>

            <ul>
              <li>
                <a href="https://github.com/marceometry">
                  <img src="/icons/github.svg" alt="Github" />
                  <span>Marceometry</span>
                </a>
              </li>
              <li>
                <img src="/icons/envelope.svg" alt="Email" />
                <span>marceometry@gmail.com</span>
              </li>
              <li>
                <img src="/icons/whatsapp.svg" alt="Whatsapp" />
                <span>51 99579-4033</span>
              </li>
            </ul>
          </nav>

          <header>
              {/* <img src="https://github.com/marceometry.png" alt="Marcelino"/> */}

              <h1>Olá, meu nome é <Green>Marcelino Teixeira</Green>!</h1>
              <h2>Sou <Purple>Desenvolvedor FrontEnd</Purple>.</h2>
          </header>

          <section>
            <p> Domino <Green>HTML</Green> e <Green>CSS</Green> e atualmente estou focado em praticar a 
            biblioteca JavaScript <Green>React</Green> juntamente do framework <Green>Next.js</Green> </p>

            <img src="/icons/code.svg" alt="</>" />
            
            <p> Procuro sempre me atentar aos <Green>mínimos detalhes</Green> da interface, pensando sempre na 
            usabilidade e <Green>experiência</Green> do <Green>usuário</Green>. </p>
          </section>
          
          <div id={landing.arrowDown}>
            <img src="/icons/arrow-down.svg" alt="v" />
          </div>
        </main>
      </div>

      <div className={about.container}>
        <h1>Sobre meus projetos</h1>

        <main>
          <img src="/icons/arrow-left.svg" alt="<" />
          
          <div>
            <p> Aplicações responsivas que se adaptam aos variados tamanhos de tela. </p>

            <p> Atenção aos detalhes pequenos do layout, para que nenhum elemento saia do seu devido lugar. </p>

            <p> Clean code, padronização e organização, procurando sempre realizar boas práticas no código. </p>
          </div>

          <img src="/icons/arrow-right.svg" alt=">" />
        </main>
      </div>
    </div>
  )
}
