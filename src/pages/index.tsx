import Head from 'next/head'
import { GetStaticProps } from 'next'
import { api } from '../services/api'

import Navbar from '../components/Navbar'
import About from '../components/About'
import Technologies from '../components/Technologies'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import { Green, Purple } from '../components/TextColor'

import css from '../css/landing.module.scss'

type HomeProps = {
  projects: Project[]
}

export default function Home({ projects }: HomeProps) {
  return (
    <div>
      <Head>
        <title>Marcelino | FrontEnd Dev</title>
        <meta property="og:title" content="Marcelino | FrontEnd Dev" />
        <meta property="og:description" content="Site que desenvolvi utilizando React e Next.js para servir como meu portfólio pessoal." />
        <meta property="og:image" content="/images/wallpaper.png" />
        <meta property="og:url" content="https://marcelino-frontend.vercel.app/" />
      </Head>
  
      <div id="home" className={css.container}>
        <Navbar />

        <main>
        <header className="down">
            <h1>Olá, meu nome é <Green>Marcelino Teixeira</Green>!</h1>
            <h2>Sou <Purple>Desenvolvedor FrontEnd</Purple>.</h2>
        </header>

        <section>
            <p className="side-appear-reverse"> Domino <Green>HTML</Green> e <Green>CSS</Green> e atualmente estou focado em praticar a 
            biblioteca JavaScript <Green>React</Green> juntamente do framework <Green>Next.js</Green> </p>

            <img className="rotate" src="/icons/code.svg" alt="</>" />
            
            <p className="side-appear"> Procuro sempre me atentar aos <Green>mínimos detalhes</Green> da interface, pensando sempre na 
            usabilidade e <Green>experiência</Green> do <Green>usuário</Green>. </p>
        </section>
        </main>
        
        <div id={css.arrowDown}>
            <img className="bounce" src="/icons/arrow-down.svg" alt="v" />
        </div>
      </div>

      <About />

      <Technologies />

      <Projects inHomePage={true} projects={projects} />

      <Footer />
    </div>
  )
}

type Project = {
  id: string
  name: string
  details: string
  origin: string
  img: string
  technologies: string[]
  githubLink: string
  designLink: string
  webLink: string
}

export const getStaticProps: GetStaticProps = async () => {
    const { data } = await api.get('/api/findProjects')

    const projects = data

    return {
        props: { projects },
        revalidate: 60 * 60 * 8
    }
}