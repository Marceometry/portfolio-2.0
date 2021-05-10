import Link from 'next/link'
import { Link as LinkScroll } from 'react-scroll'
import { useRouter } from 'next/router'
import css from '../css/components/navbar.module.scss'

export default function Navbar() {
    const router = useRouter()

    return (
        <nav className={`down-fast ${css.nav}`}>
            <ul>
                {router.pathname === '/' ? (
                    <>
                    <LinkScroll to='footer' smooth={true}><li>CONTATO</li></LinkScroll>
                    <LinkScroll to='projects' smooth={true}><li>PROJETOS</li></LinkScroll>
                    <Link href='/portfolio'><li>PORTFOLIO</li></Link>
                    <LinkScroll to='technologies' smooth={true}><li>TECNOLOGIAS</li></LinkScroll>
                    </>
                ) : router.pathname === '/portfolio' ? (
                    <>
                    <Link href='/'><li>HOME</li></Link>
                    <LinkScroll to='footer' smooth={true}><li>CONTATO</li></LinkScroll>
                    <LinkScroll to='nlw' smooth={true}><li>NEXT LEVEL WEEK</li></LinkScroll>
                    <LinkScroll to='mine' smooth={true}><li>MEUS PROJETOS</li></LinkScroll>
                    </>
                ) : (
                    <>
                    <Link href='/'><li>HOME</li></Link>
                    <Link href='/portfolio'><li>PORTFOLIO</li></Link>
                    </>
                )}
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