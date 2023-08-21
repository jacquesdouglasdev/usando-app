import Link from "next/link";
import React from "react";

export interface ExercicioProps {
    url: string;
    titulo: string;
    icone: any;
}

export default function Exercicio(props: ExercicioProps) {
    return (
        <Link href={props.url} className="
            flex flex-col items-center 
            border border-zinc-700 
            rounded-lg overflow-hidden
        ">
            {React.cloneElement(props.icone, { 
                size: 80, 
                stroke: 1,
                className: "p-5"
                })}
            <h3 className="flex justify-center bg-black w-full p-3">
                {props.titulo}
            </h3>
        </Link>
    )
}