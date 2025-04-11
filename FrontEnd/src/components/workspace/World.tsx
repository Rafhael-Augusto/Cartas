import React, { useRef, useState } from 'react'

import Letter from '../letter/Letter'
import Farlands from '../endBoards/Boards'
import PlayMusic from '../backgroundMusic/Music'

import * as S from './styles'


function World(){
    const worldSize = 10000

    const minX = -(worldSize - window.innerWidth)
    const minY = -(worldSize - window.innerHeight)

    const maxX = 0
    const maxY = 0

    const [position, setPosition] = useState({x: -(worldSize / 2 -window.innerWidth / 2), y: -(worldSize / 2 -window.innerHeight / 2)})

    const [dragging, setDragging] = useState("false")
    const [lastMousePos, setLastMousePos] = useState({x: 0, y:0})
    const [mouseClickPos, setMouseClickPos] = useState({x: 0, y: 0})

    const [isOpen, setIsOpen] = useState(false)

    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [author, setAuthor] = useState("")
    
    const [letters, setLetters] = useState<
    { id: number, title: string, body: string, author: string, x: number, y: number}[]>
    ([])

    const mouseDown = (e: React.MouseEvent) => {
        setDragging("true")
        setLastMousePos({x: e.clientX, y: e.clientY})
    }

    const mouseMove = (e: React.MouseEvent) => {
        if (dragging != "true") return

        const updatedX = e.clientX - lastMousePos.x
        const updatedY = e.clientY - lastMousePos.y

        const nextX = position.x + updatedX
        const nextY = position.y + updatedY

        const CalcX = Math.max(minX, Math.min(maxX, nextX))
        const CalcY = Math.max(minY, Math.min(maxY, nextY))

        setPosition(() => ({
            x: CalcX,
            y: CalcY
        }))

        setLastMousePos({x: e.clientX, y: e.clientY})
    }

    const mouseUp = () => {
        setDragging("false")
    }

    const MouseClickDown = (e: React.MouseEvent) => {
        setMouseClickPos({
            x: e.clientX,
            y: e.clientY
        })

    }

    const audioRef = useRef<HTMLAudioElement>(null)

    const PublishLetter = (e: React.FormEvent) => {
        e.preventDefault()

        if (audioRef.current) {
            audioRef.current.src = './sounds/pencil.wav'
            audioRef.current.currentTime = 0
            audioRef.current.volume = 0.5
            audioRef.current.play()
        }

        const newLetter = {
            id: Date.now(),
            title: title,
            body: body,
            author: author,
            x: mouseClickPos.x - position.x,
            y: mouseClickPos.y - position.y
        }

        setLetters(prev => [...prev, newLetter])
    }

    return (
        <>
        <PlayMusic />
            <S.Camera onMouseMove={mouseMove} onMouseUp={mouseUp} onMouseLeave={mouseUp} onMouseDown={mouseDown} onClick={MouseClickDown} >
                <S.World posx={position.x} posy={position.y} drag={dragging} size={worldSize}>
                    <Letter Letters={letters}/>
                    <Farlands />
                </S.World>

                <S.WriteLetter>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBGwKhJ-kv2vwL-IQtc4mdeW6qI_SlHeMTyg&s"
                     alt=""
                     onClick={() => setIsOpen(!isOpen)}
                     />

                     <audio ref={audioRef}/>
                </S.WriteLetter>

            <S.Form onSubmit={PublishLetter} style={{display: isOpen ? 'block' : 'none'}}>
                <h1>Escreva uma carta</h1>
                <div>
                    <S.Input type="text" id="Title" placeholder='Titulo: ' onChange={(e) => setTitle(e.target.value)} />
                    <S.Message id="Body" placeholder='Mensagem: ' onChange={(e) => setBody(e.target.value)} />
                    <S.Input type='file' />
                    <S.Input type="text" id="Author" placeholder='Assinado: ' onChange={(e) => setAuthor(e.target.value)} />
                    <S.CreateLetter>Colar</S.CreateLetter>
                </div>
            </S.Form>

            </S.Camera>
        </>
    )
}

export default World