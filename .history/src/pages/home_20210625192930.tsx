import ilustrationImg  from '../assets/images/illustrationImg.svg';
import logoImg from '../assets/images/logo.svg';
import GoogleIcon from '../assets/images/Google-icon.svg';

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
                        <img src={GoogleIcon} alt="" />
                        Crie sua sala com o Google
                    </button>
                </div>
            </main>
        </div>
    )
}