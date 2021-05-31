import Link from "next/link"
import Image from "next/image"
import css from '../css/components/projectsByOrigin.module.scss'

type ProjectsProps = {
    title: string
    array: Project[]
    show: boolean
}

type Project = {
  id: string
  name: string
  origin: string
  img: string
}

export default function ProjectsByOrigin({ title, array, show }: ProjectsProps) {
    return (
        <section>
            <h3 className={show ? 'down' : ''}>{title}</h3>
            
            <Link href="/portfolio">
                <a>Ver mais</a>
            </Link>

            <div className={css.projects}>
                {array.map(project => (
                    <Link href={`/portfolio/${project.id}`} key={project.id}>
                    <a className={`${show ? 'swing-in' : ''} ${css.project}`}>
                        <Image width={300} height={200} src={`/images/${project.img}`} alt={project.name} />
                        <span className="down-fast">{project.name}</span>
                    </a>
                    </Link>
                ))}
            </div>
        </section>)
}