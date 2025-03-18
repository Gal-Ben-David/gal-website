import { Intro } from "../cmps/Intro";
import { About } from '../cmps/About';
import { Projects } from "../cmps/Projects";
import { Hobbies } from "../cmps/Hobbies";


export function HomePage() {

    return (
        <main className="main-layout homepage">
            <Intro />
            <About />
            <Projects />
            <Hobbies />
        </main>
    )
}