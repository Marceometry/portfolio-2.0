import { Green, Purple } from "./TextColor";
import landing from '../css/landing.module.scss'

export default function Landing() {
    return (
        <div className={landing.container}>
            <nav className="down-fast">
            <ul>
                <li>CONTATO</li>
                <li>PORTFOLIO</li>
                <li>TECNOLOGIAS</li>
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
                <li>
                <img src="/brands/whatsapp.svg" alt="Whatsapp" />
                <span>51 99579-4033</span>
                </li>
            </ul>
            </nav>

            <main>
            <header className="down">
                {/* <img src="https://github.com/marceometry.png" alt="Marcelino"/> */}

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