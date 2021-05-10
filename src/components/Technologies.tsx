import { useState, useRef, useLayoutEffect } from 'react'
import tech from '../css/components/technologies.module.scss'

export default function Technologies() {
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
        <div className={`${tech.container} ${show && tech.show}`}>
            <h2 className={show && 'up'}>Tecnologias que já tive contato</h2>

            <main>
                <div className={`${show && 'swing-in'} ${tech.card}`}>
                    <h3>FrontEnd</h3>
                    <hr />

                    <div className={tech.technologies}>
                    <div className={tech.technology}>
                        <img src="/icons/html.svg" alt="" />
                        <span>HTML</span>
                    </div>
                    
                    <div className={tech.technology}>
                        <img src="/icons/css.svg" alt="" />
                        <span>CSS</span>
                    </div>
                    
                    <div className={tech.technology}>
                        <img src="/icons/js.svg" alt="" />
                        <span>JavaScript</span>
                    </div>
                    
                    <div className={tech.technology}>
                        <img src="/icons/ts.svg" alt="" />
                        <span>TypeScript</span>
                    </div>
                    
                    <div className={tech.technology}>
                        <img src="/icons/react.svg" alt="" />
                        <span>ReactJS</span>
                    </div>
                    
                    <div className={tech.technology}>
                        <img src="/icons/next.svg" alt="" />
                        <span>Next.js</span>
                    </div>
                    
                    <div className={tech.technology}>
                        <img src="/icons/sass.svg" alt="" />
                        <span>Sass</span>
                    </div>
                    </div>
                </div>

                <img ref={ref} className={`${show && 'rotate'} ${tech.codeImg}`} src="/icons/code-dark.svg" alt="</>" />

                <div className={`${show && 'swing-in'} ${tech.card}`}>
                    <h3>BackEnd</h3>
                    <hr />

                    <div className={tech.technologies}>
                    <div className={tech.technology}>
                        <img src="/icons/node.svg" alt="" />
                        <span>Node.js</span>
                    </div>
                    
                    <div className={tech.technology}>
                        <img src="/icons/mongo.svg" alt="" />
                        <span>MongoDB</span>
                    </div>
                    
                    <div className={tech.technology}>
                        <img src="/icons/axios.svg" alt="" />
                        <span>Axios</span>
                    </div>
                    
                    <div className={tech.technology}>
                        <img src="/icons/database.svg" alt="" />
                        <span>SQL</span>
                    </div>
                    
                    <div className={tech.technology}>
                        <img src="/icons/database.svg" alt="" />
                        <span>SQLite</span>
                    </div>
                    </div>
                </div>
            </main>
        </div>
    )
}