import ilustrationImg  from '../assets/images/illustrationImg.svg'
import logoImg from ''

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
                    <img src="{logImg}" alt="" />
                </div>
            </main>
        </div>
    )
}