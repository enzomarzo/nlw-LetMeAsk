import { spawn } from 'child_process'
import { useEffect } from 'react'
import { FormEvent, useState } from 'react'
import { useParams } from 'react-router'

import logo from '../assets/images/logo.svg'
import { Button } from '../components/Button'
import { RoomCode } from '../components/RoomCode'
import { useAuth } from '../hooks/useAuth'
import { database } from '../services/firebase'

import '../styles/room.scss'

type firebaseQuestions = Record<string, { 
    author: {
        name: string;
        avatar: string;
    }
    content: string;
    isAnswered: boolean;
    isHighLighted: boolean;
}>

type Question = {
    id:string;
    author: {
        name: string;
        avatar: string;
    }
    content: string;
    isAnswered: boolean;
    isHighLighted: boolean;
}

type RoomParams = { 
    id: string;
}

export function Room () {
    const {user} = useAuth(); 
    const params = useParams<RoomParams>();
    const [newQuestion, setNewQuestion] = useState('')
    const roomId = params.id
    const [questions, setQuestions] = useState<Question[]>([])
    const [title, setTitle] = useState("")

    //hook que dispara um evento sempre que algo mudar
    //useEffect tem dois parametros. O primeiro é uma função
    //o Segundo é um array com as coisas que o useEffect está de olho
    //se alguma dessas coisas do segundo parametro mudar, é disparada a função.
    useEffect(() => {
        const roomRef = database.ref(`rooms/${roomId}`)
        
        //essas especificações são do Firebase e estão na documentação do firebase
        roomRef.once('value', room => { 
            const databaseRoom = room.val();
            const firebaseQuestions: firebaseQuestions = databaseRoom.questions ?? {};

            const parsedQuestions = Object.entries(firebaseQuestions).map(([key, value]) => {
                return { 
                    id: key,
                    content: value.content,
                    author: value.author,
                    isHighLighted: value.isHighLighted,
                    isAnswered: value.isAnswered,
                }
            })
            
            setTitle(databaseRoom.title);
            setQuestions(parsedQuestions);
        })
     }, [roomId])

    async function handleSendQuestion(event: FormEvent) {
        event.preventDefault()

        if (newQuestion.trim() == '') { 
            return;
        }

        if (!user) { 
            throw new Error('You must be logged in');
        }

        const question = { 
            content: newQuestion,
            author: { 
                name: user.name,
                avatar: user.avatar,
            },
            isHighLighted: false,
            isAnswered: false,
        };

        await database.ref(`rooms/${roomId}/questions`).push(question)
        
    }

    return (
        <div id="page-room">
            <header>
                <div className="content">
                    <img src={logo} alt="LetMeAsk" />
                    <RoomCode code={roomId}/>
                </div>
            </header>

            <main>
                <div className="room-title">
                    <h1>Sala: {title}</h1>
                    {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
                </div>

                <form onSubmit={handleSendQuestion}>
                    <textarea 
                        placeholder="What do you wanna ask ?"
                        onChange={event => setNewQuestion(event.target.value)}  
                        value={newQuestion}  
                    />
                    <div className="form-footer">
                        {user ? (
                            <div className="user-info">
                                <img src={user.avatar} alt="{user.name}" />
                                <span>{user.name}</span>
                            </div>
                        ) : (
                            <span>To ask a question please <button>log in!</button></span>
                        )}
                        <Button type="submit" disabled={!user}>Send question</Button>
                    </div>
                </form>
            </main>    
        </div>
    )
}