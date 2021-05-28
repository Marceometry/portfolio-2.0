import React, { useState, useRef, useLayoutEffect, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import css from '../css/components/projects.module.scss'

type ProjectsProps = {
    projects: Project[]
}

type Project = {
  id: string
  name: string
  origin: string
  img: string
}

export default function ProjectList({ projects }: ProjectsProps) {
    const [show, doShow] = useState(false)
    const [myProjects, setMyProjects] = useState([])
    const [nlwProjects, setNlwProjects] = useState([])
    // const [ifrsProjects, setIfrsProjects] = useState([])
    const ref = useRef(null)

    useEffect(() => {
        const myArray = myProjects
        const nlwArray = nlwProjects
        // const ifrsArray = ifrsProjects

        projects.map(project => (
            project.origin === 'my' ? (
                myArray.push(project)
            ) : project.origin === 'nlw' ? (
                nlwArray.push(project)
            ) : ''
            // project.origin === 'ifrs' ? (
            //     // ifrsArray.push(project)
            // )
        ))

        setMyProjects(myArray)
        setNlwProjects(nlwArray)
        // setIfrsProjects(ifrsArray)
    }, [])
    
    useLayoutEffect(() => {
        const topPos = element => element.getBoundingClientRect().top
        const elementPos = topPos(ref.current)
    
        const onScroll = () => {
            const scrollPos = window.scrollY + window.innerHeight
            if (elementPos < scrollPos) {
                doShow(true)
            } else {
                doShow(false)
            }
        }
    
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    return (
        <div id="projects" className={`${css.container} ${show ? css.show : ''}`}>
            <h2 className={show ? 'up' : ''}>Projetos</h2>

            <main ref={ref}>
                <section>
                    <h3 className={show ? 'down' : ''}>Next Level Week (Rocketseat)</h3>
                    
                    <Link href="/portfolio">
                        <a>Ver mais</a>
                    </Link>

                    <div className={css.projects}>
                        {nlwProjects.map(project => (
                            <Link href={`/portfolio/${project.id}`} key={project.id}>
                            <a className={`${show ? 'swing-in' : ''} ${css.project}`}>
                                <Image width={300} height={200} src={`/images/${project.img}`} alt={project.name} />
                                <span className="down-fast">{project.name}</span>
                            </a>
                            </Link>
                        ))}
                    </div>
                </section>

                <section>
                    <h3 className={show ? 'down' : ''}>Meus Projetos</h3>
                    
                    <Link href="/portfolio">
                        <a>Ver mais</a>
                    </Link>

                    <div className={css.projects}>
                        {myProjects.map(project => (
                            <Link href={`/portfolio/${project.id}`} key={project.id}>
                            <a className={`${show ? 'swing-in' : ''} ${css.project}`}>
                                <Image width={300} height={200} src={`/images/${project.img}`} alt={project.name} />
                                <span className="down-fast">{project.name}</span>
                            </a>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* <section>
                    <h3 className={show ? 'down' : ''}>Trabalhos do IFRS</h3>
                    
                    <Link href="/portfolio">
                        <a>Ver mais</a>
                    </Link>

                    <div className={css.projects}>
                        {ifrsProjects.map(project => (
                            <Link href={`/portfolio/${project.id}`} key={project.id}>
                            <a className={`${show ? 'swing-in' : ''} ${css.project}`}>
                                <Image width={300} height={200} src={`/images/${project.img}`} alt={project.name} />
                                <span className="down-fast">{project.name}</span>
                            </a>
                            </Link>
                        ))}
                    </div>
                </section> */}
            </main>
        </div>
    )
}