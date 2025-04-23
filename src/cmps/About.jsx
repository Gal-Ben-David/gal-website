import { SmallCard } from "./SmallCard"

export function About() {
    const educationDetails = [
        {
            imgUrl: 'https://res.cloudinary.com/dvykycdey/image/upload/v1742227788/coding-academy-logo_ftvwmr.jpg',
            title: 'Full Stack Developer Bootcamp',
            location: 'Coding Academy',
            id: '101'
        },
        {
            imgUrl: 'https://res.cloudinary.com/dvykycdey/image/upload/v1742227791/tel-aviv-university-logo_oievgd.png',
            title: 'B.Sc. , Mechanical Engineering',
            location: 'Tel Aviv University',
            text: 'GPA 89.24',
            id: '102'
        }
    ]

    const workDetails = [
        {
            imgUrl: 'https://res.cloudinary.com/dvykycdey/image/upload/v1742227788/magenta_medical_logo_t3lfog.jpg',
            title: 'Mechanical Engineer & Configuration Team Lead',
            location: 'Magenta Medical',
            id: '101'
        },
        {
            imgUrl: 'https://res.cloudinary.com/dvykycdey/image/upload/v1742227788/elbit_systems_logo_sjmdpr.png',
            title: 'Operation QA Engineer',
            location: 'Elbit Systems',
            id: '102',
        }
    ]

    const skillsList = [
        'JavaScript', 'TypeScript', 'Python', 'React', 'Next.js', 'Angular', 'Node.js', 'HTML',
        'CSS', 'SASS', 'MongoDB', 'SQL', 'Redux',
    ]

    return (
        <section id="about" className="about">
            <article className="summary">
                <div className="summary-details">
                    <img src="https://res.cloudinary.com/dvykycdey/image/upload/v1742227790/photo2_rvk4rr.png" />
                    <div className="about-me">
                        <h2 className="title">About me</h2>
                        <p>Hey, I'm Gal, a Software developer with a passion for <span style={{ fontFamily: 'roboto-medium', color: '#444' }}>technology and creativity.</span></p>
                        <p>I specialize in frontend development, with solid hands-on experience in backend technologies.</p>
                        <p>With a background in both engineering and leadership, I’ve developed strong problem-solving, decision-making, and analytical skills while effectively collaborating with teams.</p>
                        {/* <p>In my free time, I enjoy pursuing my hobbies—check them out below!</p> */}

                        <ul className="skills-list">
                            {skillsList.map((item, i) =>
                                <li key={i}>{item}</li>)}
                        </ul>
                    </div>


                </div>
            </article>

            <hr />

            <div className="education">
                <h2 className="title">Education</h2>
                <ul className="education-list">
                    {
                        educationDetails.map(item =>
                            <li key={item.id}>
                                <SmallCard item={item} />
                            </li>
                        )}
                </ul>
            </div>

            <div className="work-experience">
                <h2 className="title">Work Experience</h2>
                <ul className="work-experience-list">
                    {
                        workDetails.map(item =>
                            <li key={item.id}>
                                <SmallCard item={item} />
                            </li>
                        )}
                </ul>
            </div>
        </section>

    )
}