import Link from 'next/link'
import Image from "next/image"
import css from '../css/components/projectSection.module.scss'
import { useState, useRef, useLayoutEffect } from 'react'

type ProjectSectionProps = {
    project: Project
}

type Project = {
  id: string
  name: string
  description: string
  origin: string
  img: string
  technologies: string[]
  githubLink: string
  designLink: string
  webLink: string
}

export default function ProjectSection({ project }: ProjectSectionProps) {
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
        <div className={`${css.container} ${show ? css.show : ''}`}>
            <Image width={500} height={300} className={show ? 'up' : ''} src={`/images/${project.img}`} alt="Capa do Projeto" />

            <div className={`${css.info} ${show ? 'up' : ''}`}>
                <h2>{project.name}</h2>

                <p ref={ref}>{project.description}</p>

                <ul>
                    {project.technologies.map(tech => (
                        <li>{tech}</li>
                    ))}
                </ul>

                <Link href={`/portfolio/${project.id}`}>
                    <a>Ver mais detalhes</a>
                </Link>
            </div>
        </div>
    )
}