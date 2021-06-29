import { useHistory } from 'react-router-dom';

import { Button } from '../components/Button';

import ilustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIcon from '../assets/images/google-icon.svg';

import '../styles/auth.scss';
import { useAuth } from '../hooks/useAuth';

export function Home() {
    const history = useHistory()
    const { user, signInWithGoogle } = useAuth()

    async function handleCriateRoom() {
        if(!user) { 
            await signInWithGoogle()
        }
        history.push('/rooms/new');
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
                    <button onClick={handleCriateRoom} className="create-room">
                        <img src={googleIcon} alt="logo do google" />
                        Crie sua sala com o Google
                    </button>
                    <div className="separator">ou entre em uma sala</div>
                    <form>
                        <input 
                        type="text"
                        placeholder="Digite o código da sala"
                        />
                        <Button type="submit">
                        Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}
