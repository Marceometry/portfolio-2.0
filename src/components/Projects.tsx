import React, { useState, useRef, useLayoutEffect } from "react"
import Link from "next/link"
import css from '../css/components/projects.module.scss'

type ProjectsProps = {
    projects: Project[]
    inHomePage: boolean
}

type Project = {
  id: string
  name: string
  origin: string
  img: string
}

export default function Projects({ inHomePage, projects }: ProjectsProps) {
    const [show, doShow] = useState(false)
    const ref = useRef(null)
    
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
                    
                    {inHomePage && (
                        <Link href="/portfolio">
                            <a>Ver mais</a>
                        </Link>
                    )}

                    <div className={css.projects}>
                        {projects.map(project => (
                            <>
                            {project.origin === 'nlw' && (
                            <Link href={`/portfolio/${project.id}`} key={project.id}>
                            <a className={`${show ? 'swing-in' : ''} ${css.project}`}>
                                <img src={`/images/${project.img}`} alt={project.name} />
                                <span className="down-fast">{project.name}</span>
                            </a>
                            </Link>)}
                            </>
                        ))}
                    </div>
                </section>

                <section>
                    <h3 className={show ? 'down' : ''}>Meus Projetos</h3>
                    
                    {inHomePage && (
                        <Link href="/portfolio">
                            <a>Ver mais</a>
                        </Link>
                    )}

                    <div className={css.projects}>
                        {projects.map(project => (
                            <>
                            {project.origin === 'my' && (
                            <Link href={`/portfolio/${project.id}`} key={project.id}>
                            <a className={`${show ? 'swing-in' : ''} ${css.project}`}>
                                <img src={`/images/${project.img}`} alt={project.name} />
                                <span className="down-fast">{project.name}</span>
                            </a>
                            </Link>)}
                            </>
                        ))}
                    </div>
                </section>

                {/* <section>
                    <h3 className={show ? 'down' : ''}>Trabalhos do IFRS</h3>
                    
                    {inHomePage && (
                        <Link href="/portfolio">
                            <a>Ver mais</a>
                        </Link>
                    )}

                    <div className={css.projects}>
                        {projects.map(project => (
                            <>
                            {project.origin === 'ifrs' && (
                            <Link href={`/portfolio/${project.id}`} key={project.id}>
                            <a className={`${show ? 'swing-in' : ''} ${css.project}`}>
                                <img src={`/images/${project.img}`} alt={project.name} />
                                <span className="down-fast">{project.name}</span>
                            </a>
                            </Link>)}
                            </>
                        ))}
                    </div>
                </section> */}
            </main>
        </div>
    )
}