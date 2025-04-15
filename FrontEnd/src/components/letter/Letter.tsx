import { useEffect, useState } from 'react'
import * as S from './styles'

interface LetterProps {
    id: number
    title: string
    body: string
    author: string 
    x: number
    y: number
    template: string
}

type Props = {
    Letters: LetterProps[]
}

function Letter({ Letters }: Props) {

    const [visibleIds, setVisibleIds] = useState<number[]>([])

    useEffect(() => {
        const timeout = setTimeout(() => {
            setVisibleIds(Letters.map((letter) => letter.id))
        }, 50)

        return () => clearTimeout(timeout)
    }, [Letters])

    const playAudio = (value: boolean) => {
            

        if (value) {
            const audio = new Audio('./sounds/paperOut.wav')
            audio.volume = 0.03
            audio.play()
        } else {
            const audio = new Audio('./sounds/paperIn.wav')
            audio.volume = 0.03
            audio.play()
        }
    }

    const showFullLetter = (id: number) => {
        const selected = Letters.find((letterId) => letterId.id === id)

        if (selected) {
            return
        }
    }

    return (
        <>
            {Letters.map((letter) => (
                <S.Letter onClick={() => showFullLetter(letter.id)} key={letter.id} template={letter.template} isvisible={visibleIds.includes(letter.id)} onMouseLeave={() => {playAudio(false)}} onMouseEnter={() => {playAudio(true)}} style={{position: 'absolute', top: `${letter.y - 200}px`, left: `${letter.x}px`}}>
                    <h1>{letter.title}</h1>
                    <h3>{letter.body}</h3>
                    <h2>{letter.author}</h2>
                </S.Letter>
            ))}


        </>
    )
}

export default Letter