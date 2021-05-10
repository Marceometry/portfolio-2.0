import { useState, useRef, useLayoutEffect } from "react";
import { ArrowLeft, ArrowRight } from "../../public/icons/svgArrows";
import projects from '../css/components/projects.module.scss'

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
        <div className={`${projects.container} ${show ? projects.show : ''}`}>
            <h2 className={show ? 'up' : ''}>Projetos</h2>

            <main>
                <section>
                    <h3 className={show ? 'down' : ''}>Next Level Week (Rocketseat)</h3>

                    <div ref={ref} className={projects.projects}>
                        <div>
                        <ArrowLeft disabled={true} show={show} />
                        </div>

                        <div className={`${show ? 'swing-in' : ''} ${projects.project}`}>
                            <img src="/images/happy.png" alt="Happy" />
                            <span className="down-fast">Happy</span>
                        </div>
                        
                        <div className={`${show ? 'swing-in' : ''} ${projects.project}`}>
                            <img src="/images/moveit.png" alt="Happy" />
                            <span className="down-fast">MoveIt</span>
                        </div>
                        
                        <div className={`${show ? 'swing-in' : ''} ${projects.project}`}>
                            <img src="/images/podcastr.png" alt="Happy" />
                            <span className="down-fast">Podcastr</span>
                        </div>

                        <div>
                        <ArrowRight disabled={false} show={show} />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}