import { useState, useRef, useLayoutEffect } from 'react'
import Image from 'next/image'
import css from '../css/components/technologies.module.scss'

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
        <div id="technologies" className={`${css.container} ${show ? css.show : ''}`}>
            <h2 className={show ? 'up' : ''}>Tecnologias que já tive contato</h2>

            <main>
                <div className={`${show ? 'swing-in' : ''} ${css.card}`}>
                    <h3>FrontEnd</h3>
                    <hr />

                    <div className={css.technologies}>
                    <div className={css.technology}>
                        <Image width={50} height={50} src="/brands/html.svg" alt="" />
                        <span>HTML</span>
                    </div>
                    
                    <div className={css.technology}>
                        <Image width={50} height={50} src="/brands/css.svg" alt="" />
                        <span>CSS</span>
                    </div>
                    
                    <div className={css.technology}>
                        <Image width={50} height={50} src="/brands/js.svg" alt="" />
                        <span>JavaScript</span>
                    </div>
                    
                    <div className={css.technology}>
                        <Image width={50} height={50} src="/brands/ts.svg" alt="" />
                        <span>TypeScript</span>
                    </div>
                    
                    <div className={css.technology}>
                        <Image width={50} height={50} src="/brands/react.svg" alt="" />
                        <span>ReactJS</span>
                    </div>
                    
                    <div className={css.technology}>
                        <Image width={50} height={50} src="/brands/next.svg" alt="" />
                        <span>Next.js</span>
                    </div>
                    
                    <div className={css.technology}>
                        <Image width={50} height={50} src="/brands/sass.svg" alt="" />
                        <span>Sass</span>
                    </div>
                    </div>
                </div>

                <img ref={ref} className={`${show ? 'rotate' : ''} ${css.codeImg}`} src="/icons/code-white.svg" alt="</>" />

                <div className={`${show ? 'swing-in' : ''} ${css.card}`}>
                    <h3>BackEnd</h3>
                    <hr />

                    <div className={css.technologies}>
                    <div className={css.technology}>
                        <Image width={50} height={50} src="/brands/node.svg" alt="" />
                        <span>Node.js</span>
                    </div>
                    
                    <div className={css.technology}>
                        <Image width={50} height={50} src="/brands/mongo.svg" alt="" />
                        <span>MongoDB</span>
                    </div>
                    
                    <div className={css.technology}>
                        <Image width={50} height={50} src="/brands/axios.svg" alt="" />
                        <span>Axios</span>
                    </div>
                    
                    <div className={css.technology}>
                        <Image width={50} height={50} src="/icons/database.svg" alt="" />
                        <span>SQL</span>
                    </div>
                    
                    <div className={css.technology}>
                        <Image width={50} height={50} src="/icons/database.svg" alt="" />
                        <span>SQLite</span>
                    </div>
                    </div>
                </div>
            </main>
        </div>
    )
}