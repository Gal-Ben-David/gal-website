export function Projects() {

    const projectsList = [
        {
            title: 'Yeyllo',
            description: 'Project management application inspired by Trello, enabling teams to efficiently organize and track tasks.',
            techStack: 'React, Redux, Node.js, MongoDB, SASS, WebSockets, REST API',
            imgUrl: 'https://res.cloudinary.com/dvykycdey/image/upload/v1735382698/yeyllo-project-shot_ufckkz.png',
            link: 'https://yeyllo-app.onrender.com/home'
        },
        {
            title: 'KeepIt',
            description: 'Google Keep-inspired note-taking app built with React.',
            techStack: 'HTML, CSS, React',
            imgUrl: 'https://res.cloudinary.com/dvykycdey/image/upload/v1736779308/KeepIt-tasks_ankqzi.png',
            link: 'https://gal-ben-david.github.io/KeepIt/#/'
        },
    ]

    return (
        <section id="projects" className="projects full">
            <h2 className="title">Projects</h2>
            <ul className="projects-list">
                {projectsList.map((item, i) =>
                    <li key={i} className="project">
                        <div className="project-details">
                            <h3>{item.title}</h3>
                            <p className="project-description">{item.description}</p>
                            <p className="tech-stack">{item.techStack}</p>
                        </div>

                        <a className="project-image" href={item.link} target="_blank">
                            <img loading="lazy" src={item.imgUrl} />
                        </a>
                    </li>
                )}
            </ul>
        </section>

    )
}