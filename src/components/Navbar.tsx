import Link from 'next/link'
import Image from 'next/image'
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
                    <li><LinkScroll to='footer' smooth={true}>CONTATO</LinkScroll></li>
                    <li><LinkScroll to='projects' smooth={true}>PROJETOS</LinkScroll></li>
                    <li><Link href='/portfolio'><a>PORTFÓLIO</a></Link></li>
                    <li><LinkScroll to='technologies' smooth={true}>TECNOLOGIAS</LinkScroll></li>
                    </>
                ) : router.pathname === '/portfolio' ? (
                    <>
                    <li><Link href='/'><a>HOME</a></Link></li>
                    <li><LinkScroll to='footer' smooth={true}>CONTATO</LinkScroll></li>
                    </>
                ) : (
                    <>
                    <li><Link href='/'><a>HOME</a></Link></li>
                    <li><Link href='/portfolio'><a>PORTFÓLIO</a></Link></li>
                    </>
                )}
            </ul>

            <ul>
                <li>                
                    <a rel="noopener noreferrer" href="https://github.com/marceometry" target="_blank">
                    <Image width={40} height={40} src="/brands/github.svg" alt="Github" />
                    <span>Github</span>
                    </a>
                </li>
                <li>                
                    <a rel="noopener noreferrer" href="https://www.linkedin.com/in/marcelino-teixeira-796907212/" target="_blank">
                    <Image width={40} height={40} src="/brands/linkedin.svg" alt="Linkedin" />
                    <span>Linkedin</span>
                    </a>
                </li>
                <li>                
                    <Image width={40} height={40} src="/icons/envelope.svg" alt="Email" />
                    <span>marceometry@gmail.com</span>
                </li>
            </ul>
        </nav>
    )
}