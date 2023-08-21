import Link from "next/link";

export default function Links() {

    function renderizarLinks(texto: string, url: string) {
        return (
            <Link href={url} className="
                text-zinc-500 text-sm hover:text-zinc-300
                transition duration-300
            ">
                {texto}
            </Link>
        )
    }

    return (
        <div className="flex gap-16">
            <div className="flex flex-col gap-5">
                <h3>Recursos</h3>
                <div className="flex flex-col gap-2">
                    {renderizarLinks("Docs", "/")}
                    {renderizarLinks("Aprenda", "/")}
                    {renderizarLinks("Blog", "/")}
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <h3>Mais</h3>
                <div className="flex flex-col gap-2">
                    {renderizarLinks("História", "/")}
                    {renderizarLinks("Github", "/")}
                    {renderizarLinks("Twitter", "/")}
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <h3>Recursos</h3>
                <div className="flex flex-col gap-2">
                    {renderizarLinks("Razão Social", "/")}
                    {renderizarLinks("Projetos Antigos", "/")}
                    {renderizarLinks("Esporte e Lazer", "/")}
                    {renderizarLinks("Saúde", "/")}
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <h3>Legal</h3>
                <div className="flex flex-col gap-2">
                    {renderizarLinks("Política de Privacidade", "/")}
                    {renderizarLinks("Termos de Uso", "/")}
                    {renderizarLinks("Proteção de Dados", "/")}
                </div>
            </div>
        </div>
    )
}