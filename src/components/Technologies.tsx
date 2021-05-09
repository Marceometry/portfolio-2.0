import tech from '../css/components/technologies.module.scss'

export default function Technologies() {
    return (
        <div className={tech.container}>
            <h2>Tecnologias que já tive contato</h2>

            <main>
                <div className={tech.card}>
                    <h3>FrontEnd</h3>
                    <hr />

                    <div className={tech.technologies}>
                    <div className={tech.technology}>
                        <img src="/icons/html.svg" alt="" />
                        <span>HTML</span>
                    </div>
                    
                    <div className={tech.technology}>
                        <img src="/icons/css.svg" alt="" />
                        <span>CSS</span>
                    </div>
                    
                    <div className={tech.technology}>
                        <img src="/icons/js.svg" alt="" />
                        <span>JavaScript</span>
                    </div>
                    
                    <div className={tech.technology}>
                        <img src="/icons/ts.svg" alt="" />
                        <span>TypeScript</span>
                    </div>
                    
                    <div className={tech.technology}>
                        <img src="/icons/react.svg" alt="" />
                        <span>ReactJS</span>
                    </div>
                    
                    <div className={tech.technology}>
                        <img src="/icons/next.svg" alt="" />
                        <span>Next.js</span>
                    </div>
                    
                    <div className={tech.technology}>
                        <img src="/icons/sass.svg" alt="" />
                        <span>Sass</span>
                    </div>
                    </div>
                </div>

                <img className={tech.codeImg} src="/icons/code-dark.svg" alt="</>" />

                <div className={tech.card}>
                    <h3>BackEnd</h3>
                    <hr />

                    <div className={tech.technologies}>
                    <div className={tech.technology}>
                        <img src="/icons/node.svg" alt="" />
                        <span>Node.js</span>
                    </div>
                    
                    <div className={tech.technology}>
                        <img src="/icons/mongo.svg" alt="" />
                        <span>MongoDB</span>
                    </div>
                    
                    <div className={tech.technology}>
                        <img src="/icons/axios.svg" alt="" />
                        <span>Axios</span>
                    </div>
                    
                    <div className={tech.technology}>
                        <img src="/icons/database.svg" alt="" />
                        <span>SQL</span>
                    </div>
                    
                    <div className={tech.technology}>
                        <img src="/icons/database.svg" alt="" />
                        <span>SQLite</span>
                    </div>
                    </div>
                </div>
            </main>
        </div>
    )
}