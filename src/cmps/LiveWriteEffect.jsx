import React, { useState, useEffect } from 'react';

export function LiveWriteEffect() {
    const sentence = "Navigating the waves of creativity, driven by passion and guided by experience."
    const [isTyping, setIsTyping] = useState(true)
    const [text, setText] = useState('')
    const speed = 150; // typing speed in milliseconds

    useEffect(() => {
        let index = 0

        const intervalId = setInterval(() => {
            setText(sentence.slice(0, index + 1))
            index++

            if (index === sentence.length) {
                clearInterval(intervalId)
                setIsTyping(false)
            }
        }, speed)

        return () => clearInterval(intervalId)
    }, [])

    return (
        <p className={`inspiration-sentence ${isTyping ? 'typing' : ''}`}>{text}</p>
    )
}