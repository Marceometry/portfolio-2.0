import Head from 'next/head'
import Image from 'next/image'
import { GetStaticProps } from 'next'
import { api } from '../services/api'

import Navbar from '../components/Navbar'
import About from '../components/About'
import Technologies from '../components/Technologies'
import ProjectsList from '../components/ProjectsList'
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

            <Image width={300} height={250} className="rotate" src="/icons/code.svg" alt="</>" />
            
            <p className="side-appear"> Procuro sempre me atentar aos <Green>mínimos detalhes</Green> da interface, pensando sempre na 
            usabilidade e <Green>experiência</Green> do <Green>usuário</Green>. </p>
        </section>
        </main>
        
        <div id={css.arrowDown}>
            <Image width={80} height={150} className="bounce" src="/icons/arrow-down.svg" alt="v" />
        </div>
      </div>

      <About />

      <Technologies />

      <ProjectsList projects={projects} />

      <Footer />
    </div>
  )
}

type Project = {
  id: string
  name: string
  origin: string
  img: string
}

export const getStaticProps: GetStaticProps = async () => {
    const { data } = await api.get('/api/findProjects')

    data.sort(function (a, b) {
        return a.order - b.order
    })

    const projects = data

    return {
        props: { projects },
        revalidate: 60 * 60 * 8
    }
}