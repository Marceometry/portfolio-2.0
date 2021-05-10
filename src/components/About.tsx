import { ArrowLeft, ArrowRight } from '../../public/icons/svgArrows'
import { Green } from './TextColor'
import about from '../css/components/about.module.scss'
import { useState, useRef, useLayoutEffect } from 'react'

export default function About() {
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
      <div className={`${about.container} ${show ? about.show : ''}`}>
        <h2 className={show ? 'up' : ''}>Sobre meus projetos</h2>

        <main>
            <ArrowLeft disabled={false} show={show} />
            
            <div ref={ref} className={about.textContainer}>
            <p className={`${show ? 'focus-in' : ''} ${about.active}`}> Aplicações <Green>responsivas</Green> que se <Green>adaptam</Green> aos variados <Green>tamanhos</Green> de <Green>tela</Green>. </p>

            <p className={show ? 'focus-in' : ''}> Atenção aos <Green>detalhes pequenos</Green> do layout, para que nenhum elemento saia do seu <Green>devido lugar</Green>. </p>

            <p className={show ? 'focus-in' : ''}> <Green>Clean code</Green>, padronização e organização, procurando sempre realizar <Green>boas práticas</Green> no <Green>código</Green>. </p>
            </div>

            <ArrowRight disabled={false} show={show} />
        </main>

        <div className={about.dotsContainer}>
            <button className={`${about.dot} ${show ? 'bounce-in' : ''}`} id={about.active}></button>
            <button className={`${about.dot} ${show ? 'bounce-in' : ''}`}></button>
            <button className={`${about.dot} ${show ? 'bounce-in' : ''}`}></button>
        </div>
    </div>
    )
}