import Link from "next/link";
import css from '../css/components/projects.module.scss'

export function AllProjects({ show, projects }) {
    return (
        <>
            <section>
                <h3 className={show ? 'down' : ''}>Next Level Week (Rocketseat)</h3>

                <div className={css.projects}>
                    {projects.map(project => (
                        <>
                        {project.origin === 'Projeto da Rocketseat' && (
                        <Link href={`/projects/nome-do-projeto`} key={project.id}>
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

                <div className={css.projects}>
                    {projects.map(project => (
                        <>
                        {project.origin === 'Projeto da Rocketseat' && (
                        <Link href={`/projects/nome-do-projeto`} key={project.id}>
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
                <h3 className={show ? 'down' : ''}>Trabalhos do IFRS</h3>

                <div className={css.projects}>
                    {projects.map(project => (
                        <>
                        {project.origin === 'Projeto da Rocketseat' && (
                        <Link href={`/projects/nome-do-projeto`} key={project.id}>
                        <a className={`${show ? 'swing-in' : ''} ${css.project}`}>
                            <img src={`/images/${project.img}`} alt={project.name} />
                            <span className="down-fast">{project.name}</span>
                        </a>
                        </Link>)}
                        </>
                    ))}
                </div>
            </section>
        </>
    )
}

export function MainProjects({ show }) {
    return (
        <>
            <section>
                <h3 className={show ? 'down' : ''}>Next Level Week (Rocketseat)</h3>

                <Link href="/portfolio">
                    <a>Ver mais</a>
                </Link>

                <div className={css.projects}>
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

                <Link href="/portfolio">
                    <a>Ver mais</a>
                </Link>

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

                <Link href="/portfolio">
                    <a>Ver mais</a>
                </Link>

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
        </>
    )
}