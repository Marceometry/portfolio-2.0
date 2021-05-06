import Link from 'next/link'
import { useRouter } from 'next/router'
import css from '../css/components/navbar.module.scss'

export default function Navbar() {
    const router = useRouter()

    function isActive(route: string) {
        if (route == router.pathname) {
            return css.active
        } else ""
    }

    return (
        <div className={css.container}>
            <header>
                <img src="/images/wallpaper.jpg" alt=""/>
            </header>

            <ul id="navbar">
                <Link href="/about"><a><li className={isActive('/about')}> Sobre mim </li></a></Link>

                <Link href="/portfolio"><a><li className={isActive('/portfolio')}> Portfólio </li></a></Link>

                <Link href="/contact"><a><li className={isActive('/contact')}> Contato </li></a></Link>

                <Link href="https://github.com/marceometry">
                    <a target="_blank" rel="external noopener noreferrer nofollow">
                        <li> GitHub </li>
                    </a>
                </Link>
            </ul>
        </div>
    )
}