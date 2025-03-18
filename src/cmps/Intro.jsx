import { Card } from './Card'
import { useEffect, useState } from 'react'

export function Intro() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        setVisible(true)
    }, [])

    return (
        <section className="introduction full">
            <img className={`logo ${visible ? 'fade-in' : ''}`} src="https://res.cloudinary.com/dvykycdey/image/upload/v1742227632/gal-logo4_od7n2b.png" />
            <Card visible={visible} />
        </section>
    )
}