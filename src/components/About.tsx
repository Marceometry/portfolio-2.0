import { ArrowLeft, ArrowRight } from '../../public/icons/svgArrows'
import { Green } from './TextColor'
import css from '../css/components/about.module.scss'
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

    function setText(index: number) {
        if (index < 0) {
            index = 2
        } else if (index > 2) {
            index = 0
        }
        setCurrentText(index)
    }
    
    return (
      <div id="about" className={`${css.container} ${show ? css.show : ''}`}>
        <h2 className={show ? 'up' : ''}>Sobre meus projetos</h2>

        <main>
            <button onClick={() => setText(currentText - 1)}>
                <ArrowLeft show={show} />
            </button>
            
            <div ref={ref} className={css.textContainer}>
                <p className={`${show ? 'focus-in' : ''} ${currentText === 0 ? css.active : ''}`}> 
                    Aplicações <Green>responsivas</Green> que se <Green>adaptam</Green> aos variados <Green>tamanhos</Green> de <Green>tela</Green>. 
                </p>

                <p className={`${show ? 'focus-in' : ''} ${currentText === 1 ? css.active : ''}`}>
                    Atenção aos <Green>detalhes pequenos</Green> do layout, para que nenhum elemento saia do seu <Green>devido lugar</Green>.
                </p>

                <p className={`${show ? 'focus-in' : ''} ${currentText === 2 ? css.active : ''}`}>
                    <Green>Clean code</Green>, padronização e organização, procurando sempre realizar <Green>boas práticas</Green> no <Green>código</Green>.
                </p>
            </div>

            <button onClick={() => setText(currentText + 1)}>
                <ArrowRight show={show} />
            </button>
        </main>

        <div ref={dots} className={css.dotsContainer}>
            <button onClick={() => setText(0)} 
                    className={`${css.dot} ${show ? 'bounce-in' : ''} ${currentText === 0 ? css.dotActive : ''}`}>
            </button>

            <button onClick={() => setText(1)} 
                    className={`${css.dot} ${show ? 'bounce-in' : ''} ${currentText === 1 ? css.dotActive : ''}`}>
            </button>

            <button onClick={() => setText(2)} 
                    className={`${css.dot} ${show ? 'bounce-in' : ''} ${currentText === 2 ? css.dotActive : ''}`}>
            </button>
        </div>
    </div>
    )
}