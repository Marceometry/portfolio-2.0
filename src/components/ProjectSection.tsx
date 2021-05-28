import Link from 'next/link'
import Image from "next/image"
import css from '../css/components/projectSection.module.scss'

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
    return (
        <div className={css.container}>
            <Image width={500} height={300} src={`/images/${project.img}`} alt="Capa do Projeto" />

            <div className={css.info}>
                <h2>{project.name}</h2>

                <p>{project.description}</p>

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