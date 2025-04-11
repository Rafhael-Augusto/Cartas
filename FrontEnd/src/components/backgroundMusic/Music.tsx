import { useRef, useState } from "react"

import * as S from './styles'

const songs = [
    '/sounds/background/CalmCoffee.mp3',
    '/sounds/background/CalmPeace.mp3',
    '/sounds/background/LazyDays.mp3',
    '/sounds/background/RelaxingLofiBeat.mp3'
]

function PlayMusic() {
    const audioRef = useRef<HTMLAudioElement>(null)

    const [isPlaying, setIsPlaying] = useState(true)

    const playMusic = () => {
        const randomIndex = Math.floor(Math.random() * songs.length)
        const selectedSong = songs[randomIndex]

        if (audioRef.current) {
            audioRef.current.src = selectedSong
            audioRef.current.volume = 0.05

            if (isPlaying) {
                audioRef.current.play()
            } else {
                audioRef.current.pause()
            }

            setIsPlaying(!isPlaying)
        }
    }

    const changeVolume = (e: string) => {
        const volume = Number(e)
        if (audioRef.current) {
            audioRef.current.volume = volume
        }
    }

    return (
        <S.Wrapper>
            <audio ref={audioRef} />
            <S.Pause  onClick={playMusic}>{!isPlaying ? '⏸ Pause' : '▶ Play'}</S.Pause>
            <input onChange={(e) => changeVolume(e.target.value)} type="number" step={0.1} min={0} max={1} />
        </S.Wrapper>
    )
}

export default PlayMusic