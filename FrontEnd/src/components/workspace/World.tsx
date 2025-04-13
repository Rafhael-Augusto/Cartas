import React, { useEffect, useRef, useState } from 'react'

import Letter from '../letter/Letter'
import Farlands from '../endBoards/Boards'
//import PlayMusic from '../backgroundMusic/Music'

import * as S from './styles'

function World(){
    const worldSize = 12000

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
    const [template, setTemplate] = useState("")
    
    const [letters, setLetters] = useState<
    { id: number, title: string, body: string, author: string, x: number, y: number, template: string}[]>
    ([])

    useEffect(() => {
        const fetchLetters = async () => {
            const res = await fetch('http://127.0.0.1:8000/api/letters/')
            const data = await res.json()
            setLetters(data)
        }
    
        fetchLetters()  // chama de início
    
        const interval = setInterval(() => {
            fetchLetters()
        }, 3000)
    
        return () => clearInterval(interval)
    }, [])

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
    const pencilRef = useRef<HTMLAudioElement>(null)

    const keysounds = [
        '/sounds/keyboard/twoKey.mp3',
        '/sounds/keyboard/threeKey.mp3',
    ]

    const pencilSound = (e: React.KeyboardEvent) => {

        if (e.key !== 'Backspace') {
            const randomKey = Math.floor(Math.random() * keysounds.length)
            const audio = new Audio(keysounds[randomKey])
            audio.volume = 0.3
            audio.play()
        } else {
            const audio = new Audio('/sounds/keyboard/oneKey.mp3')
            audio.volume = 0.3
            audio.play()
        }
    }

    const PublishLetter = (e: React.FormEvent) => {
        e.preventDefault()

        if (audioRef.current) {
            audioRef.current.src = './sounds/pencil.wav'
            audioRef.current.currentTime = 0
            audioRef.current.volume = 0.5
            audioRef.current.play()
        }

        const newLetter = {
            title: title,
            body: body,
            author: author,
            x: mouseClickPos.x - position.x,
            y: mouseClickPos.y - position.y,
            template: template
        }

        const handleSubmit = async () => {
            try {
                const response = await fetch("http://127.0.0.1:8000/api/letters/", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newLetter)
                })
    
                if (response.ok) {
                    return
                } else {
                    console.error('erro bixo')
                }
            } catch (error) {
                console.log(error)
            }
        }


        handleSubmit()
    }

    const secretTemplates = {
        meow: 'https://i.pinimg.com/736x/b4/bb/b2/b4bbb2198b036fe1024571ec6b60f8b8.jpg',
        bizarramente: 'https://www.icegif.com/wp-content/uploads/2022/01/icegif-982.gif',
        triangles: 'https://www.icegif.com/wp-content/uploads/2022/10/icegif-756.gif',
        dacat: 'https://www.onlygraphicdesign.com/wp-content/uploads/2017/08/gif-collection-tomas-brundson.gif'
    }

    const bodyHandleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setBody(e.target.value)

        const findTemplate = Object.entries(secretTemplates).find(([key]) => e.target.value.toLowerCase().includes(key))
            if (findTemplate) {
                setTemplate(findTemplate[1])
            } else {
                setTemplate('')
            }
    }

    return (
        <>
            <S.Camera onMouseMove={mouseMove} onMouseUp={mouseUp} onMouseLeave={mouseUp} onMouseDown={mouseDown} onClick={MouseClickDown} >
                <S.World id='world' posx={position.x} posy={position.y} drag={dragging} size={worldSize}>
                    <Letter Letters={letters}/>
                    <Farlands />
                </S.World>

                <S.WriteLetter>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBGwKhJ-kv2vwL-IQtc4mdeW6qI_SlHeMTyg&s"
                     alt=""
                     onClick={() => setIsOpen(!isOpen)}
                     />

                     <audio ref={audioRef}/>
                     <audio ref={pencilRef}/>
                </S.WriteLetter>

            <S.Form onSubmit={PublishLetter} style={{display: isOpen ? 'block' : 'none'}}>
                <h1>Escreva uma carta</h1>
                <div>
                    <S.Input maxLength={20} type="text" id="Title" placeholder='Titulo: ' onChange={(e) => setTitle(e.target.value)} onKeyDown={(e) => pencilSound(e)} />
                    <S.Message wrap='soft' maxLength={300} required id="Body" placeholder='Mensagem: ' onChange={(e) => {bodyHandleChange(e)}} onKeyDown={(e) => pencilSound(e)} />
                    <S.Input maxLength={20} type="text" id="Author" placeholder='Assinado: ' onChange={(e) => setAuthor(e.target.value)} onKeyDown={(e) => pencilSound(e)} />
                    <S.CreateLetter>Colar</S.CreateLetter>
                </div>
            </S.Form>

            </S.Camera>
        </>
    )
}

export default World