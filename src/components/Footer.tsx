import React from 'react'
import css from '../css/components/footer.module.scss'
import { Purple } from './TextColor'

export default function Footer() {
    return (
        <footer className={css.footer}>
            <section>
                <h3>Tecnologias que já tive contato:</h3>

                <ul>
                    <li><img src="/icons/html.svg"/>HTML</li>
                    <li><img src="/icons/css.svg"/>CSS</li>
                    <li><img src="/icons/js.svg"/>JavaScript</li>
                    <li><img src="/icons/ts.svg" className={css.ts}/>TypeScript</li>
                    <li><img src="/icons/react.svg"/>React</li>
                    <li><img src="/icons/next.svg"/>Next.js</li>
                    <li><img src="/icons/mongo.svg" className={css.mongo}/>MongoDB</li>
                    <li><img src="/icons/node.svg"/>Node.js</li>
                    <li><img src="/icons/database.svg"/>SQL</li>
                    <li><img src="/icons/database.svg"/>SQLite</li>
                </ul>
            </section>

            <hr/>

            <section>
                <p><Purple>&#169;</Purple> Copyright 2021</p>
                <p>Desenvolvido com <Purple>&#10084;</Purple> por Marcelino Teixeira</p>
            </section>
        </footer>
    )
}