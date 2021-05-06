import React from 'react'
import Head from 'next/head'
import { GetStaticPaths, GetStaticProps } from 'next'
import { api } from '../../services/api'

import Navbar from '../../components/Navbar'
import LinkCard from '../../components/LinkCard'
import Footer from '../../components/Footer'
import { Purple } from '../../components/TextColor'

import css from '../../css/project.module.scss'

type ProjectProps = {
  project: Project
}

export default function Project({ project }: ProjectProps) {
  return (
    <div className={css.container}>
      <Head>
        <title>Portfólio | {project.name}</title>
      </Head>

      <Navbar />

      <main>
        <header>
          <h2>{project.name}</h2>
          <hr />
        </header>

        <section>
          <div>
            <img src={`/images/${project.img}`} alt="Capa do Projeto" />
          </div>

          <h2>Descrição do projeto</h2>
          <hr />

          <p>{project.details}</p>
        </section>

        <div className={css.links}>
          <LinkCard link={`${project.githubLink}`} img="github" external="true">Repositório</LinkCard>

          {project.designLink && <LinkCard link={`${project.designLink}`} img="figma" external="true">Design</LinkCard>}

          {project.webLink && <LinkCard link={`${project.webLink}`} img="globe" external="true">Acesse</LinkCard>}
        </div>

        {project.technologies && (
          <section>
            <h2>Tecnolgias Utilizadas</h2>
            <hr />

            <p className={css.technologies}>
              {project.technologies.map((technology, index) => {
                return (
                  <span key={technology}>
                    <Purple>
                      <span className={css.technology}>
                        {technology}
                      </span>
                    </Purple>
                    {index < project.technologies.length - 1 && (
                      <strong className={css.separate}> - </strong>
                    )}
                  </span>
                )
              })}
            </p>
          </section>
        )}
      </main>

      <Footer />
    </div>
  )
}

type Project = {
  _id: string
  name: string
  details: string
  img: string
  technologies: string[]
  githubLink: string
  designLink: string
  webLink: string
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await api.get('/api/findProjects')

  const paths = data.map((project: Project) => ({
    params: { id: project._id },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await api.get(`/api/projects/${params.id}`)

  const project = data

  return {
    props: { project },
    revalidate: 60 * 60 * 24
  }
}