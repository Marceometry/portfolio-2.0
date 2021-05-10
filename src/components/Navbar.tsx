import { Link } from 'react-scroll'
import css from '../css/components/navbar.module.scss'

export default function Navbar() {
    return (
        <nav className={`down-fast ${css.nav}`}>
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
    )
}