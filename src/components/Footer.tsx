import Link from 'next/link'
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
                        <LinkScroll to='home' smooth={true}><li>Home</li></LinkScroll>
                        <LinkScroll to='about' smooth={true}><li>Sobre</li></LinkScroll>
                        <LinkScroll to='footer' smooth={true}><li>Contato</li></LinkScroll>
                        <LinkScroll to='projects' smooth={true}><li>Portfolio</li></LinkScroll>
                        <LinkScroll to='technologies' smooth={true}><li>Tecnologias</li></LinkScroll>
                        </>
                    ) : router.pathname === '/portfolio' ? (
                        <>
                        <Link href='/'><li>Home</li></Link>
                        <LinkScroll to='nlw' smooth={true}><li>Next Level Week</li></LinkScroll>
                        <LinkScroll to='mine' smooth={true}><li>Meus Projetos</li></LinkScroll>
                        </>
                    ) : (
                        <>
                        <Link href='/'><li>Home</li></Link>
                        <Link href='/portfolio'><li>Portfolio</li></Link>
                        </>
                    )}
                </ul>
            </section>

            <hr/>

            <section>
                <h4>CONTATO</h4>

                <ul>
                    <li>
                        <img src="/brands/whatsapp.svg" alt="Email" />
                        <span>51 99579-4033</span>
                    </li>
                    <li>
                        <img src="/icons/envelope-purple.svg" alt="Email" />
                        <span>marceometry@gmail.com</span>
                    </li>
                </ul>
            </section>

            <p><Purple>&#169;</Purple> Copyright 2021</p>
            <p>Desenvolvido com <Purple>&#10084;</Purple> por Marcelino Teixeira</p>
        </footer>
    )
}