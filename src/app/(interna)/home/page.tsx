import { IconApi, IconArrowsJoin, IconBug, IconChartDots3, IconDatabase, IconLoader, IconRoute, IconRoute2 } from "@tabler/icons-react";
import Titulo from "../shared/Titulo";
import Exercicio from "./Exercicio";

export default function Page() {
    return (
        <div>
            <div>
                <Titulo texto="Área do Aluno" legenda="Lista de todos os exercícios implementados" />
                <div className="grid grid-cols-4 gap-5 mt-10">
                    <Exercicio url="/loading" titulo="Loading" icone={<IconLoader />} />
                    <Exercicio url="/erro" titulo="Erro" icone={<IconBug />} />
                    <Exercicio url="/dinamica/blog/123" titulo="Rota Dinâmica #1" icone={<IconRoute />} />
                    <Exercicio url="/dinamica/curso/react/config-ambiente/123" titulo="Rota Dinâmica #2" icone={<IconRoute2 />} />
                    <Exercicio url="/paralelas" titulo="Rotas Paralelas" icone={<IconArrowsJoin />} />
                    <Exercicio url="/estado" titulo="Usando Estado" icone={<IconDatabase />} />
                    <Exercicio url="/dados" titulo="Usando Api" icone={<IconApi />} />
                    <Exercicio url="/contexto/a" titulo="Usando Contexto" icone={<IconChartDots3 />} />
                </div>
            </div>
        </div>
    )
}