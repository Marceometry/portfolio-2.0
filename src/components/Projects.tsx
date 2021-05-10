import { useState, useRef, useLayoutEffect } from "react";
import { ArrowLeft, ArrowRight } from "../../public/icons/svgArrows";
import projects from '../css/components/projects.module.scss'

export default function Projects() {
    const [currentIndex, setCurrentIndex] = useState(0)
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

    function showProjects(index) {
        if (index < 0 || index > 2) { return }
        console.log(index)

        // const projects = ref.current.querySelectorAll('div')

        // for (let i = 0; i < projects.length; i++) {
        //     projects[i].classList.add(projects.hidden)
        // }  
        // // for (let j = index; j < j + 2; j++) {
        // //     projects[j].classList.remove(`${projects.hidden}`)
        // // }
        
        setCurrentIndex(index)
    }
    
    return (
        <div className={`${projects.container} ${show ? projects.show : ''}`}>
            <h2 className={show ? 'up' : ''}>Projetos</h2>

            <main>
                <section>
                    <h3 className={show ? 'down' : ''}>Next Level Week (Rocketseat)</h3>

                    <div ref={ref} className={projects.projects}>
                        <button onClick={() => showProjects(currentIndex - 1)}>
                            <ArrowLeft disabled={true} show={show} />
                        </button>

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
                        
                        <div className={`${show ? 'swing-in' : ''} ${projects.project} ${projects.hidden}`}>
                            <img src="/images/happy2.png" alt="Happy" />
                            <span className="down-fast">Happy 2.0</span>
                        </div>
                        
                        <div className={`${show ? 'swing-in' : ''} ${projects.project} ${projects.hidden}`}>
                            <img src="/images/moveit.png" alt="Happy" />
                            <span className="down-fast">MoveIt</span>
                        </div>

                        <button onClick={() => showProjects(currentIndex + 1)}>
                            <ArrowRight disabled={false} show={show} />
                        </button>
                    </div>
                </section>
            </main>
        </div>
    )
}