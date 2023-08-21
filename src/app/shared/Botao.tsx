import Link from "next/link"

export interface BotaoProps {
    url?: string
    onClick?: () => void
    destacado?: boolean
    children: any
    maior?: boolean
}

export default function Botao(props: BotaoProps) {

    function renderizarBotao() {
        return (
            <button onClick={props.onClick} className={`
                ${props.destacado
                    ? 'bg-zinc-100 text-black hover:bg-zinc-200' 
                    : 'bg-black text-zinc-400 hover:bg-zinc-400 hover:text-black'}
                border border-zinc-600 rounded-lg
                ${props.maior ? 'px-5 py-3' : 'px-3 py-1.5 text-sm'}
            `}>
                {props.children}
            </button>
        )
    }

    return props.url ? (
        <Link href={props.url}>
            {renderizarBotao()}
        </Link>
    ) : (
        renderizarBotao()
    )
}