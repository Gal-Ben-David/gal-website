import { Intro } from "../cmps/Intro";
import { About } from '../cmps/About';


export function HomePage() {

    return (
        <main className="main-layout homepage">
            <Intro />
            <About />
        </main>
    )
}