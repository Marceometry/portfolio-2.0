import React from 'react'
import css from '../css/components/footer.module.scss'
import { Purple } from './TextColor'

export default function Footer() {
    return (
        <footer className={css.footer}>
            <section>
                <span><Purple>&#169;</Purple> Copyright 2021</span>
            </section>

            <hr/>

            <section>
                <span>Desenvolvido com <Purple>&#10084;</Purple> por Marcelino Teixeira</span>
            </section>
        </footer>
    )
}