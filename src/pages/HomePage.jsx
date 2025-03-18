import { Intro } from "../cmps/Intro";
import { About } from '../cmps/About';
import { Projects } from "../cmps/Projects";
import { Hobbies } from "../cmps/Hobbies";
import { Footer } from "../cmps/Footer";


export function HomePage() {

    return (
        <main className="full homepage">
            <Intro />
            <About />
            <Projects />
            <Hobbies />
            <Footer />
        </main>
    )
}