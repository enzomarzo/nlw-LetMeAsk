import { Link, useHistory } from 'react-router-dom';
import { FormEvent, useState } from 'react';

import ilustrationImg  from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';

import '../styles/auth.scss';
import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';
import { database } from '../services/firebase';

export function NewRoom () { 

    const { user } = useAuth()
    const history = useHistory()
    const [newRoom, setNewRoom] = useState(''); // o tipo string do useState é porque o newRoom é do tipo string

    /* em funções que lidam com eventos, como onClick, onSubmit e etc, geralmente recebemos o event 
    * como parametro pois assim conseguimos manipular esse evento que está acontecendo
    * Já o FormEvent vai nos ajudar a tipar esse evento com um formulário de evento */
    async function handleCreateRoom(event: FormEvent) { 

        event.preventDefault()  // o famoso impedir que faça o recarregamento da página no enter

        if(newRoom.trim() === '') {    // se o usuário der enter com espaços ou tudo em branco, para o método
            return;
        }

        // enviaremos a criação de sala para o banco de dados do firebase
        const roomRef = database.ref('rooms');      // esse método ref é do proprio Firebase
        const firebaseRoom = await roomRef.push({   // ao clicar em 'criar sala' incluir no array rooms do database
            title: newRoom,
            authorId: user?.id,
        })

        history.push(`/rooms/${firebaseRoom.key}`) // esse key é gerado automaticamente pelo firebase, uma key unica a cada inserção no banco

    }

    return (
        <div id="page-auth">

            <aside>
                <img src={ilustrationImg} alt="ilustração simbolizando perguntas e respostas" />
                <strong>Cria salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas de sua audiência em tempo real</p>
            
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="LetMeAsk" />
                    <h2>Criar uma nova sala</h2>
                    <form onSubmit={handleCreateRoom}>      
                        <input 
                            type="text" 
                            placeholder="Nome da sala"
                            onChange={event => setNewRoom(event.target.value)}
                            value={newRoom}
                        />
                        <Button type="submit">Entrar na sala</Button>
                    </form>
                    <p>
                        Quer entrar em uma sala existente? <Link to="/">clique aqui</Link>
                    </p>
                </div>
            </main>
        </div>
    )
}