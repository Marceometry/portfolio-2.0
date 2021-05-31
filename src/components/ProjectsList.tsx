import React, { useState, useRef, useLayoutEffect, useEffect } from "react"
import css from '../css/components/projectsList.module.scss'
import ProjectsByOrigin from "./ProjectsByOrigin"

type ProjectsProps = {
    projects: Project[]
}

type Project = {
  id: string
  name: string
  origin: string
  img: string
}

export default function ProjectsList({ projects }: ProjectsProps) {
    const [show, doShow] = useState(false)
    const [myProjects, setMyProjects] = useState([])
    const [nlwProjects, setNlwProjects] = useState([])
    const [ifrsProjects, setIfrsProjects] = useState([])
    const ref = useRef(null)

    useEffect(() => {
        const myArray = myProjects
        const nlwArray = nlwProjects
        const ifrsArray = ifrsProjects

        projects.map(project => (
            project.origin === 'my' ? (
                myArray.push(project)
            ) : project.origin === 'nlw' ? (
                nlwArray.push(project)
            ) : project.origin === 'ifrs' ? (
                ifrsArray.push(project)
            ) : ''
        ))

        setMyProjects(myArray)
        setNlwProjects(nlwArray)
        setIfrsProjects(ifrsArray)
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
                <ProjectsByOrigin title="Next Level Week (Rocketseat)" array={nlwProjects} show={show} />

                <ProjectsByOrigin title="Meus Projetos" array={myProjects} show={show} />

                <ProjectsByOrigin title="Trabalhos do IFRS" array={ifrsProjects} show={show} />
            </main>
        </div>
    )
}