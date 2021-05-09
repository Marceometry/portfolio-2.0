import { ArrowLeft, ArrowRight } from "../../public/icons/svgArrows";
import projects from '../css/components/projects.module.scss'

export default function Projects() {
    return (
        <div className={projects.container}>
            <h2>Projetos</h2>

            <main>
                <section>
                    <h3>Next Level Week (Rocketseat)</h3>

                    <div className={projects.projects}>
                    <ArrowLeft />

                    <div className={projects.project}>
                        <img src="/images/happy.png" alt="Happy" />
                        <span>Happy</span>
                    </div>
                    
                    <div className={projects.project}>
                        <img src="/images/moveit.png" alt="Happy" />
                        <span>MoveIt</span>
                    </div>
                    
                    <div className={projects.project}>
                        <img src="/images/podcastr.png" alt="Happy" />
                        <span>Podcastr</span>
                    </div>

                    <ArrowRight />
                    </div>
                </section>
            </main>
        </div>
    )
}