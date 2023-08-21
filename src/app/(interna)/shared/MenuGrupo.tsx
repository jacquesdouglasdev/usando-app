export interface MenuGrupoProps {
    titulo: string;
    children: any;
}

export default function MenuGrupo(props: MenuGrupoProps) {
    return (
        <div className="flex flex-col gap-5">
            <h3 className="uppercase text-xs text-zinc-500 font-semibold">{props.titulo}</h3>
            <div className="flex flex-col gap-2">
                {props.children}
            </div>
        </div>
    )
}