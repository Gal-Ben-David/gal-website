import { Card } from './Card'
import { useEffect, useState } from 'react'

export function Intro() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        setVisible(true)
    }, [])

    return (
        <section className="introduction full">
            <header className="header">
                <img className={`logo ${visible ? 'fade-in' : ''}`} src="https://res.cloudinary.com/dvykycdey/image/upload/v1742227632/gal-logo4_od7n2b.png" />

                <nav className="nav-links">
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#hobbies">Hobbies</a>
                </nav>
            </header>

            <Card visible={visible} />
        </section>
    )
}