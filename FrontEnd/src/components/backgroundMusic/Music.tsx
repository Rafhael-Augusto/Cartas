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

            audioRef.current.volume = 0.05
        }
    }, [currentTrack, isPlaying])

    const PlayMusic = () => {
        if (audioRef.current) {
            audioRef.current.loop = true
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

    const changeVolume = (volume: number) => {
        if (audioRef.current) {
            audioRef.current.volume = volume
        }
    }

    return (
        <S.Wrapper>
            <div>
                <S.Arrow onClick={prevTrack}>{`<`}</S.Arrow>
                <S.Pause onClick={() => {PlayMusic()}}>{!isPlaying ? '▶' : '⏸'}</S.Pause>
                <S.Arrow onClick={nextTrack}>{`>`}</S.Arrow>
            </div>

            <audio ref={audioRef} />
            <input onChange={(e) => changeVolume(Number(e.target.value))} placeholder="volume" type="number" step={0.05} min={0} max={1} />
        </S.Wrapper>
    )
}

export default PlayMusic