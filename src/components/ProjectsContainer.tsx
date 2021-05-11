import { useState, useRef, useLayoutEffect } from "react";
import { AllProjects, MainProjects } from './ProjectsSection'
import css from '../css/components/projects.module.scss'

export default function Projects({ inHomePage, projects }) {
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
                {inHomePage ? <MainProjects show={show} /> : <AllProjects show={show} projects={projects} />}
            </main>
        </div>
    )
}