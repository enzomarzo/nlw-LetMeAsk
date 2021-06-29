import ilustrationImg  from '../assets/images/illustrationImg.svg'

export function Home() { 
    return (
        <div>
        <aside>
            <img src={ilustrationImg} alt="ilustração simbolizando perguntas e respostas" />
            <strong>Cria salas de Q&A ao-vivo</strong>
        </aside>
        </div>
    )
}