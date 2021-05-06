import React from 'react'
import Head from 'next/head'
import { GetStaticProps } from 'next'
import { api } from '../services/api'

import Navbar from '../components/Navbar'
import Project from '../components/Project'
import Footer from '../components/Footer'

import css from '../css/portfolio.module.scss'

type PortfolioProps = {
    projects: Project[]
}

export default function Portfolio({ projects }: PortfolioProps) {
    return (
        <div className={css.container}>
            <Head>
                <title>Marcelino | Portfólio</title>
            </Head>

            <Navbar />

            <main>
                <header>
                    <h2> Meu Portfólio </h2>
                </header>
                <hr/>

                {projects.map((project: Project) => (
                    <Project key={project._id} 
                        _id={project._id} 
                        img={`/images/${project.img}`} 
                        title={project.name} 
                        origin={project.origin} 
                        description={project.description}
                        technologies={project.technologies}
                    />
                ))}
            </main>

            <Footer />
        </div>
    )
}

type Project = {
    _id: string
    img: string
    name: string
    origin: string
    description: string
    technologies: string[]
}

export const getStaticProps: GetStaticProps = async () => {
    const { data } = await api.get('/api/findProjects')

    const projects = data

    return {
        props: { projects },
        revalidate: 60 * 60 * 8
    }
}