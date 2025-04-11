import { useEffect, useRef, useState } from 'react'
import * as S from './styles'

interface LetterProps {
    id: number
    title: string
    body: string
    author: string 
    x: number
    y: number
}

type Props = {
    Letters: LetterProps[]
}

function Letter({ Letters }: Props) {
    const audioRef = useRef<HTMLAudioElement>(null)

    const [visibleIds, setVisibleIds] = useState<number[]>([])

    useEffect(() => {
        const timeout = setTimeout(() => {
            setVisibleIds(Letters.map((letter) => letter.id))
        }, 50)

        return () => clearTimeout(timeout)
    }, [Letters])

    const playAudio = (value: boolean) => {
        if ( audioRef.current && !audioRef.current.onplaying) {
            if (value) {
                audioRef.current.src = './sounds/paperIn.wav'
            } else {
                audioRef.current.src = './sounds/paperOut.wav'
            }

            audioRef.current.currentTime = 0
            audioRef.current.volume = 0.035
            audioRef.current.play()
        }
    }

    return (
        <>
            {Letters.map((letter) => (
                <S.Letter isvisible={visibleIds.includes(letter.id)} onMouseLeave={() => {playAudio(false)}} onMouseEnter={() => {playAudio(true)}} key={letter.id} style={{position: 'absolute', top: `${letter.y - 200}px`, left: `${letter.x}px`}}>
                    <h1>{letter.title}</h1>
                    <h2>{letter.body}</h2>
                    <h2>{letter.author}</h2>
                    <audio ref={audioRef}/>
                </S.Letter>
            ))}
        </>
    )
}

export default Letter