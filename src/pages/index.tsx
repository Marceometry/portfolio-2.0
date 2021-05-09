import React from 'react'
import Head from 'next/head'
import { Green, Purple } from '../components/TextColor'
import { ArrowLeft, ArrowRight } from '../../public/icons/svgArrows'

import landing from '../css/landing.module.scss'
import about from '../css/components/about.module.scss'
import tech from '../css/components/technologies.module.scss'
import projects from '../css/components/projects.module.scss'
import Footer from '../components/Footer'

export default function Landing() {
  return (
    <div>
      <div className={landing.container}>
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

        <main>
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
        </main>
          
        <div id={landing.arrowDown}>
          <img src="/icons/arrow-down.svg" alt="v" />
        </div>
      </div>

      <div className={about.container}>
        <h2>Sobre meus projetos</h2>

        <main>
          <ArrowLeft />
          
          <div className={about.textContainer}>
            <p className={about.active}> Aplicações <Green>responsivas</Green> que se <Green>adaptam</Green> aos variados <Green>tamanhos</Green> de <Green>tela</Green>. </p>

            <p> Atenção aos <Green>detalhes pequenos</Green> do layout, para que nenhum elemento saia do seu <Green>devido lugar</Green>. </p>

            <p> <Green>Clean code</Green>, padronização e organização, procurando sempre realizar <Green>boas práticas</Green> no <Green>código</Green>. </p>
          </div>

          <ArrowRight />
        </main>

        <div className={about.dotsContainer}>
          <button className={about.dot} id={about.active}></button>
          <button className={about.dot}></button>
          <button className={about.dot}></button>
        </div>
      </div>

      <div className={tech.container}>
        <h2>Tecnologias que já tive contato</h2>

        <main>
          <div className={tech.card}>
            <h3>FrontEnd</h3>
            <hr />

            <div className={tech.technologies}>
              <div className={tech.technology}>
                <img src="/icons/html.svg" alt="" />
                <span>HTML</span>
              </div>
              
              <div className={tech.technology}>
                <img src="/icons/css.svg" alt="" />
                <span>CSS</span>
              </div>
              
              <div className={tech.technology}>
                <img src="/icons/js.svg" alt="" />
                <span>JavaScript</span>
              </div>
              
              <div className={tech.technology}>
                <img src="/icons/ts.svg" alt="" />
                <span>TypeScript</span>
              </div>
              
              <div className={tech.technology}>
                <img src="/icons/react.svg" alt="" />
                <span>ReactJS</span>
              </div>
              
              <div className={tech.technology}>
                <img src="/icons/next.svg" alt="" />
                <span>Next.js</span>
              </div>
              
              <div className={tech.technology}>
                <img src="/icons/sass.svg" alt="" />
                <span>Sass</span>
              </div>
            </div>
          </div>

          <img className={tech.codeImg} src="/icons/code-dark.svg" alt="</>" />

          <div className={tech.card}>
            <h3>BackEnd</h3>
            <hr />

            <div className={tech.technologies}>
              <div className={tech.technology}>
                <img src="/icons/node.svg" alt="" />
                <span>Node.js</span>
              </div>
              
              <div className={tech.technology}>
                <img src="/icons/mongo.svg" alt="" />
                <span>MongoDB</span>
              </div>
              
              <div className={tech.technology}>
                <img src="/icons/axios.svg" alt="" />
                <span>Axios</span>
              </div>
              
              <div className={tech.technology}>
                <img src="/icons/database.svg" alt="" />
                <span>SQL</span>
              </div>
              
              <div className={tech.technology}>
                <img src="/icons/database.svg" alt="" />
                <span>SQLite</span>
              </div>
            </div>
          </div>
        </main>
      </div>

      <div className={projects.container}>
        <h2>Projetos</h2>

        <main>
          <section>
            <h3>Next Level Week (Rocketseat)</h3>

            <div className={projects.projects}>
              <ArrowLeft />

              <div className={projects.project}>
                <img src="/images/happy.png" alt="Happy" />
                <span>Happy</span>
              </div>
              
              <div className={projects.project}>
                <img src="/images/moveit.png" alt="Happy" />
                <span>MoveIt</span>
              </div>
              
              <div className={projects.project}>
                <img src="/images/podcastr.png" alt="Happy" />
                <span>Podcastr</span>
              </div>

              <ArrowRight />
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </div>
  )
}
