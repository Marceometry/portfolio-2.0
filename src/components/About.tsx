import { ArrowLeft, ArrowRight } from '../../public/icons/svgArrows'
import { Green } from './TextColor'
import about from '../css/components/about.module.scss'

export default function About() {
    return (
      <div className={about.container}>
        <h2>Sobre meus projetos</h2>

        <main>
            <ArrowLeft />
            
            <div className={about.textContainer}>
            <p className={about.active}> Aplicações <Green>responsivas</Green> que se <Green>adaptam</Green> aos variados <Green>tamanhos</Green> de <Green>tela</Green>. </p>

            <p> Atenção aos <Green>detalhes pequenos</Green> do layout, para que nenhum elemento saia do seu <Green>devido lugar</Green>. </p>

            <p> <Green>Clean code</Green>, padronização e organização, procurando sempre realizar <Green>boas práticas</Green> no <Green>código</Green>. </p>
            </div>

            <ArrowRight />
        </main>

        <div className={about.dotsContainer}>
            <button className={about.dot} id={about.active}></button>
            <button className={about.dot}></button>
            <button className={about.dot}></button>
        </div>
    </div>
    )
}