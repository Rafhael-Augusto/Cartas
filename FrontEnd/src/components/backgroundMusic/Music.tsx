import { useEffect, useRef, useState } from "react"

import * as S from './styles'

const songs = [
    '/sounds/background/CalmCoffee.mp3',
    '/sounds/background/CalmPeace.mp3',
    '/sounds/background/LazyDays.mp3',
    '/sounds/background/RelaxingLofiBeat.mp3'
]

function PlayMusic() {
    const audioRef = useRef<HTMLAudioElement>(null)

    const [isPlaying, setIsPlaying] = useState(false)
    const [currentTrack, setCurrentTrack] = useState(0)

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.src = songs[currentTrack]
            audioRef.current.loop = true

            if (isPlaying) {
                audioRef.current.play()
            }

            audioRef.current.volume = 0.1
        }
    }, [currentTrack, isPlaying])

    const PlayMusic = () => {
        if (audioRef.current) {
            
            if (isPlaying) {
                audioRef.current.pause()
            } else {
                audioRef.current.play()
            }

            setIsPlaying(!isPlaying)
        }
    }

    const nextTrack = () => {
        const nextSong = (currentTrack + 1) % songs.length
        setCurrentTrack(nextSong)

        if (audioRef.current) {
            audioRef.current.src = songs[currentTrack]
        }
    }

    const prevTrack = () => {
        setCurrentTrack((current) => current === 0 ? songs.length - 1 : current - 1)
    }

    return (
        <S.Wrapper>
            <audio ref={audioRef} />
            <input type="number" step={0.1} min={0} max={1} />
            <S.Arrow onClick={prevTrack}>{`<`}</S.Arrow>
            <S.Pause onClick={() => {PlayMusic()}}>{!isPlaying ? '▶ Play' : '⏸ Pause'}</S.Pause>
            <S.Arrow onClick={nextTrack}>{`>`}</S.Arrow>
        </S.Wrapper>
    )
}

export default PlayMusic