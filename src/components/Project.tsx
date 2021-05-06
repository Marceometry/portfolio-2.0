import React, { ReactNode } from 'react'
import Link from 'next/link'
import { Purple } from './TextColor'

import css from '../css/components/project.module.scss'

type ProjectProps = {
    _id: string
    img: string
    title: string
    origin: string
    description: string
    technologies: string[]
}

export default function Project(props: ProjectProps) {
    return (
        <>
        <Link href={`/portfolio/${props._id}`}>
            <a className={css.container}>
                <img src={props.img} alt="Capa do Projeto"/>

                <section>
                    <h2>{props.title}</h2>
                    <h4>{props.origin}</h4>

                    <p>{props.description}</p>

                    {props.technologies && (
                        <span className={css.technologies}>
                        Tecnologias
                            utilizadas: {props.technologies.map((technology, index) => {
                                return (
                                    <span key={technology}>
                                        <Purple>
                                            <span className={css.technology}>
                                                {technology}
                                            </span>
                                        </Purple>
                                        {index < props.technologies.length - 1 && (
                                            <strong className={css.separate}> - </strong> 
                                        )}
                                    </span>
                                )
                            })}
                        </span>
                    )}
                </section>
            </a>
        </Link>

        <hr/>
        </>
    )
}