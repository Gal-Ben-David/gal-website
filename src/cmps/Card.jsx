import { LiveWriteEffect } from './LiveWriteEffect'

export function Card({ visible }) {
    return (
        <section className={`card ${visible ? 'fade-in' : ''}`}>
            <div className="card-details">
                <h2>Gal Ben David</h2>
                <h3>Software Developer</h3>

                <div className="links">
                    <a href="/gal-website/file/Gal_Ben_David_Software_Developer.pdf" target="_blank">
                        <button className="btn btn-light download-btn">Get my resume</button>
                    </a>

                    <div className="social-media-links">
                        <a href="https://github.com/Gal-Ben-David" target="_blank">
                            <img className="github-icon" src="https://res.cloudinary.com/dvykycdey/image/upload/v1742227702/github_rpsf75.png" />
                        </a>
                        <a href="https://www.linkedin.com/in/gal-ben-david-202158233/" target="_blank">
                            <img className="linkedin-icon" src="https://res.cloudinary.com/dvykycdey/image/upload/v1742227701/linkedin_ljazpx.png" />
                        </a>
                    </div>
                </div>

            </div>

            <LiveWriteEffect />

        </section>

    )
}