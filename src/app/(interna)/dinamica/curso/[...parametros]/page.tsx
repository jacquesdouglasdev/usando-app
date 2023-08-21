import Titulo from "@/app/(interna)/shared/Titulo";

export default function Page(props: any) {
    return (
        <div>
            <Titulo texto="Rota dinâmica #2" legenda="Exibindo todos os parâmetros passados na rota" />
            <div className="mt-10">
                <code>
                    <pre className="text-2xl bg-black p-5 rounded-md">
                        {JSON.stringify(props, null, 4)}
                    </pre>
                </code>
            </div>
        </div>
    )
}