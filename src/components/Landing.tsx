import { Green, Purple } from "./TextColor";
import { Link } from 'react-scroll'
import landing from '../css/landing.module.scss'

export default function Landing() {
    return (
        <div id="home" className={landing.container}>
            <nav className="down-fast">
            <ul>
                <Link to='footer' smooth={true}><li>CONTATO</li></Link>
                <Link to='projects' smooth={true}><li>PORTFOLIO</li></Link>
                <Link to='technologies' smooth={true}><li>TECNOLOGIAS</li></Link>
            </ul>

            <ul>
                <li>
                    <a href="https://github.com/marceometry" target="_blank">
                    <img src="/brands/github.svg" alt="Github" />
                    <span>Marceometry</span>
                    </a>
                </li>
                <li>
                    <img src="/icons/envelope.svg" alt="Email" />
                    <span>marceometry@gmail.com</span>
                </li>
            </ul>
            </nav>

            <main>
            <header className="down">
                <h1>Olá, meu nome é <Green>Marcelino Teixeira</Green>!</h1>
                <h2>Sou <Purple>Desenvolvedor FrontEnd</Purple>.</h2>
            </header>

            <section>
                <p className="side-appear-reverse"> Domino <Green>HTML</Green> e <Green>CSS</Green> e atualmente estou focado em praticar a 
                biblioteca JavaScript <Green>React</Green> juntamente do framework <Green>Next.js</Green> </p>

                <img className="rotate" src="/icons/code.svg" alt="</>" />
                
                <p className="side-appear"> Procuro sempre me atentar aos <Green>mínimos detalhes</Green> da interface, pensando sempre na 
                usabilidade e <Green>experiência</Green> do <Green>usuário</Green>. </p>
            </section>
            </main>
            
            <div id={landing.arrowDown}>
                <img className="bounce" src="/icons/arrow-down.svg" alt="v" />
            </div>
        </div>
    )
}