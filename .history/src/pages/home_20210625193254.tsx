import ilustrationImg  from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIcon from '../assets/images/google-icon.svg';

export function Home() { 
    return (
        <div>
            <aside>
                <img src={ilustrationImg} alt="ilustração simbolizando perguntas e respostas" />
                <strong>Cria salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas de sua audiência em tempo real</p>
            </aside>
            <main>
                <div>
                    <img src={logoImg} alt="LetMeAsk" />
                    <button>
                        <img src={googleIcon} alt="logo do google" />
                        Crie sua sala com o Google
                    </button>
                    <div>ou entre em uma sala</div>
                    <form>
                        <input 
                            type="text" 
                            placeholder="Digite o código da sala"
                        />
                        <button type="submit"></button>
                    </form>
                </div>
            </main>
        </div>
    )
}