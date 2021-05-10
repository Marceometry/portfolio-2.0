import { ArrowLeft, ArrowRight } from '../../public/icons/svgArrows'
import { Green } from './TextColor'
import about from '../css/components/about.module.scss'
import { useState, useRef, useLayoutEffect } from 'react'

export default function About() {
    const [currentText, setCurrentText] = useState(0)
    const [show, doShow] = useState(false)
    const dots = useRef(null)
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

    function setText(index) {
        const p = ref.current.querySelectorAll('p')
        const dot = dots.current.querySelectorAll('button')

        for (let i = 0; i < p.length; i++) {
            p[i].classList.remove(`${about.active}`)
            dot[i].classList.remove(`${about.dotActive}`)
        }

        if (index < 0) {
            index = 2
        } else if (index > 2) {
            index = 0
        }
        setCurrentText(index)
        p[index].classList.add(`${about.active}`)
        dot[index].classList.add(`${about.dotActive}`)
    }
    
    return (
      <div className={`${about.container} ${show ? about.show : ''}`}>
        <h2 className={show ? 'up' : ''}>Sobre meus projetos</h2>

        <main>
            <button onClick={() => setText(currentText - 1)}>
                <ArrowLeft disabled={false} show={show} />
            </button>
            
            <div ref={ref} className={about.textContainer}>
            <p className={`${show ? 'focus-in' : ''} ${about.active}`}> Aplicações <Green>responsivas</Green> que se <Green>adaptam</Green> aos variados <Green>tamanhos</Green> de <Green>tela</Green>. </p>

            <p className={show ? 'focus-in' : ''}> Atenção aos <Green>detalhes pequenos</Green> do layout, para que nenhum elemento saia do seu <Green>devido lugar</Green>. </p>

            <p className={show ? 'focus-in' : ''}> <Green>Clean code</Green>, padronização e organização, procurando sempre realizar <Green>boas práticas</Green> no <Green>código</Green>. </p>
            </div>

            <button onClick={() => setText(currentText + 1)}>
                <ArrowRight  disabled={false} show={show} />
            </button>
        </main>

        <div ref={dots} className={about.dotsContainer}>
            <button onClick={() => setText(0)} className={`${about.dot} ${show ? 'bounce-in' : ''} ${about.dotActive}`}></button>
            <button onClick={() => setText(1)} className={`${about.dot} ${show ? 'bounce-in' : ''}`}></button>
            <button onClick={() => setText(2)} className={`${about.dot} ${show ? 'bounce-in' : ''}`}></button>
        </div>
    </div>
    )
}