import Image from "next/image"

export interface RecursoProps {
    titulo: string
    descricao: string
    imagem: string
}

export default function Recurso(props: RecursoProps) {
    return(
        <div className={`
            border border-zinc-700 p-5 rounded-lg
        `}>
            <div className="flex justify-center mb-7">
                <Image src={props.imagem} width={250} height={300} alt={"imagem do recurso"}/>
            </div>
            <h3 className="text-xl font-semibold mb-1">{props.titulo}</h3>
            <p className="text-zinc-500 text-sm">{props.descricao}</p>
        </div>
    )
}