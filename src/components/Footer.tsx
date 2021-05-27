import Link from 'next/link'
import Image from 'next/image'
import { Link as LinkScroll } from 'react-scroll'
import { Purple } from './TextColor'

import css from '../css/components/footer.module.scss'
import { useRouter } from 'next/router'

export default function Footer() {
    const router = useRouter()

    return (
        <footer id="footer" className={css.footer}>
            <section>
                <h4>MENU</h4>

                <ul id={css.menu}>
                    {router.pathname === '/' ? (
                        <>
                        <li><LinkScroll to='home' smooth={true}>Home</LinkScroll></li>
                        <li><LinkScroll to='about' smooth={true}>Sobre</LinkScroll></li>
                        <li><LinkScroll to='footer' smooth={true}>Contato</LinkScroll></li>
                        <li><LinkScroll to='projects' smooth={true}>Projetos</LinkScroll></li>
                        <li><Link href="/portfolio"><a>Portfólio</a></Link></li>
                        <li><LinkScroll to='technologies' smooth={true}>Tecnologias</LinkScroll></li>
                        </>
                    ) : router.pathname === '/portfolio' ? (
                        <>
                        <li><Link href='/'><a>Home</a></Link></li>
                        <li><LinkScroll to='nlw' smooth={true}>Next Level Week</LinkScroll></li>
                        <li><LinkScroll to='mine' smooth={true}>Meus Projetos</LinkScroll></li>
                        </>
                    ) : (
                        <>
                        <li><Link href='/'><a>Home</a></Link></li>
                        <li><Link href='/portfolio'><a>Portfólio</a></Link></li>
                        </>
                    )}
                </ul>
            </section>

            <hr/>

            <section>
                <h4>CONTATO</h4>

                <ul>
                    <li>
                        <Image width={30} height={30} src="/brands/whatsapp.svg" alt="Email" />
                        <span>51 99579-4033</span>
                    </li>
                    <li>
                        <Image width={30} height={30} src="/icons/envelope-purple.svg" alt="Email" />
                        <span>marceometry@gmail.com</span>
                    </li>
                </ul>
            </section>

            <p><Purple>&#169;</Purple> Copyright 2021</p>
            <p>Desenvolvido com <Purple>&#10084;</Purple> por Marcelino Teixeira</p>
        </footer>
    )
}