import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import React from "react"
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"

import css from '../../css/project.module.scss'
import { api } from "../../services/api"

type ProjectProps = {
    project: Project
}

export default function Project({ project }: ProjectProps) {
    return (
        <div>
            <Head>
                <title>Marcelino | {project.name}</title>
            </Head>

            <div className={css.container}>

                <Navbar />

                <main>
                <header className="down">
                    <h1>{project.name}</h1>
                </header>

                {project.mockup ? (
                    <img className="focus-in" src={`/mockups/${project.mockup}`} alt="Capa do Projeto" />
                ) : (
                    <img className={`focus-in ${css.image}`} src={`/images/${project.img}`} alt="Capa do Projeto" />
                )}

                <div>
                    <section>
                        <h3 className="side-appear-reverse">Descrição do Projeto</h3>
                        <hr className="focus-in" />

                        <p className="swing-in">{project.description}</p>
                    </section>

                    <section>
                        <h3 className="side-appear-reverse">Tecnologias Utilizadas</h3>
                        <hr className="focus-in" />

                        <ul className={css.horizontal}>
                            {project.technologies.map(tech => (
                                <li className="swing-in">
                                    {tech}
                                </li>
                            ))}
                        </ul>
                    </section>
                    
                    {project.features && (
                        <section>
                            <h3 className="side-appear-reverse">Funcionalidades Adicionadas</h3>
                            <hr className="focus-in" />

                            <ul>
                                {project.features.map(feature => (
                                    <li className="swing-in">
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}
                    
                    <section>
                        <h3 className="side-appear-reverse">Links:</h3>
                        <hr className="focus-in" />

                        <ul className={css.horizontal} id={css.links}>
                            <a href={project.githubLink} target="_blank"><li className="swing-in"> <img src="/brands/github.svg" alt="" /> Repositório no Github </li></a>

                            {project.designLink && (
                                <a href={project.designLink} target="_blank"><li className="swing-in"> <img src="/brands/figma.svg" alt="" /> Design no Figma </li></a>
                            )}
                            
                            {project.webLink && (
                                <a href={project.webLink} target="_blank"><li className="swing-in"> <img src="/icons/globe.svg" alt="" /> Acessar na web </li></a>
                            )}
                        </ul>
                    </section>
                </div>
                </main>
            </div>

            <Footer />
        </div>
    )
}

type Project = {
  id: string
  name: string
  description: string
  img: string
  mockup: string
  technologies: string[]
  features: string[]
  githubLink: string
  designLink: string
  webLink: string
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await api.get('/api/findProjects')

  const paths = data.map((project: Project) => ({
    params: { id: project.id },
  }))

  return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await api.get(`/api/projects/${params.id}`)

  const project = data

  return {
    props: { project },
    revalidate: 60 * 60 * 8
  }
}