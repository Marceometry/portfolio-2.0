import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import { Green, Purple } from '../../components/TextColor'
import { api } from '../../services/api'

import css from '../../css/portfolio.module.scss'
import ProjectSection from '../../components/ProjectSection'

type PortfolioProps = {
    projects: Project[]
}

export default function Portfolio({ projects }: PortfolioProps) {
    return (
        <div>
            <Head>
                <title>Marcelino | Portfolio</title>
            </Head>

            <div className={css.container} id="portfolio">
                <Navbar />

                <main>
                <header className="down">
                    <h1>Este é o meu <Purple>Portfólio</Purple></h1>
                    <h2>Confira aqui todos os <Green>meus projetos</Green>.</h2>
                </header>

                <section>
                    <p className="side-appear-reverse"> Aqui você pode encontrar projetos de <Green>eventos de programação</Green> como a NLW, porém com funcionalidades
                    e <Green>recursos a mais</Green> que adicionei. </p>

                    <Image width={300} height={250} className="rotate" src="/icons/code.svg" alt="</>" />
                    
                    <p className="side-appear"> Também é possível encontrar <Green>trabalhos</Green> do ensino médio técnico do <Green>IFRS</Green>, assim como 
                    meus <Green>projetos particulares</Green>. </p>
                </section>
                </main>

                <div id={css.arrowDown}>
                    <Image width={80} height={150} className="bounce" src="/icons/arrow-down.svg" alt="v" />
                </div>
            </div>

            <div className={css.projectsContainer}>
                {projects.map(project => (
                    <ProjectSection project={project} />
                ))}
            </div>

            <Footer />
        </div>
    )
}

type Project = {
  id: string
  name: string
  description: string
  details: string
  origin: string
  img: string
  technologies: string[]
  githubLink: string
  designLink: string
  webLink: string
  order: number
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