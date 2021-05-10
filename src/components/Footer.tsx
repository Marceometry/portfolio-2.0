import { Link } from 'react-scroll'
import { Purple } from './TextColor'

import css from '../css/components/footer.module.scss'

export default function Footer() {
    return (
        <footer id="footer" className={css.footer}>
            <section>
                <h4>MENU</h4>

                <ul id={css.menu}>
                    <Link to='home' smooth={true}><li>Home</li></Link>
                    <Link to='about' smooth={true}><li>Sobre</li></Link>
                    <Link to='footer' smooth={true}><li>Contato</li></Link>
                    <Link to='projects' smooth={true}><li>Portfolio</li></Link>
                    <Link to='technologies' smooth={true}><li>Tecnologias</li></Link>
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