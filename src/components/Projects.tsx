import Link from "next/link";
import { useState, useRef, useLayoutEffect } from "react";
import css from '../css/components/projects.module.scss'

export default function Projects() {
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

            <main>
                <section>
                    <h3 className={show ? 'down' : ''}>Next Level Week (Rocketseat)</h3>

                    {/* <Link href="/portfolio">
                        <a>Ver mais</a>
                    </Link> */}

                    <div ref={ref} className={css.projects}>
                        <Link href="/projects/nome-do-projeto">
                            <a className={`${show ? 'swing-in' : ''} ${css.project}`}>
                                <img src="/images/happy.png" alt="Happy" />
                                <span className="down-fast">Happy</span>
                            </a>
                        </Link>
                        
                        <a className={`${show ? 'swing-in' : ''} ${css.project}`}>
                            <img src="/images/moveit.png" alt="MoveIt" />
                            <span className="down-fast">MoveIt</span>
                        </a>
                        
                        <a className={`${show ? 'swing-in' : ''} ${css.project}`}>
                            <img src="/images/happy2.png" alt="Happy 2.0" />
                            <span className="down-fast">Happy 2.0</span>
                        </a>
                        
                        <a className={`${show ? 'swing-in' : ''} ${css.project}`}>
                            <img src="/images/podcastr.png" alt="Podcastr" />
                            <span className="down-fast">Podcastr</span>
                        </a>
                    </div>
                </section>

                <section>
                    <h3 className={show ? 'down' : ''}>Meus Projetos</h3>

                    <div className={css.projects}>
                        <a className={`${show ? 'swing-in' : ''} ${css.project}`}>
                            <img src="/images/portfolio1.png" alt="Portfólio" />
                            <span className="down-fast">Portfólio v1.0</span>
                        </a>
                        
                        <a className={`${show ? 'swing-in' : ''} ${css.project}`}>
                            <img src="/images/portfolio2.png" alt="Portfólio" />
                            <span className="down-fast">Portfólio v2.0</span>
                        </a>
                    </div>
                </section>

                <section>
                    <h3 className={show ? 'down' : ''}>Trabalhos do IFRS</h3>

                    <div className={css.projects}>
                        <a className={`${show ? 'swing-in' : ''} ${css.project}`}>
                            <img src="/images/projeto-integrador.png" alt="Projeto Integrador" />
                            <span className="down-fast">Projeto Integrador</span>
                        </a>
                        
                        <a className={`${show ? 'swing-in' : ''} ${css.project}`}>
                            <img src="/images/criart.png" alt="Criart" />
                            <span className="down-fast">Gráfica Criart</span>
                        </a>
                        
                        <a className={`${show ? 'swing-in' : ''} ${css.project}`}>
                            <img src="/images/jogo-da-velha.png" alt="Jogo da Velha" />
                            <span className="down-fast">Jogo da Velha</span>
                        </a>
                    </div>
                </section>
            </main>
        </div>
    )
}