import Principal from "./landing/Principal";
import Recursos from "./landing/Recursos";
import Titulo from "./shared/Titulo";

export default function Page() {
    return (
        <div className="flex flex-col">
            <Principal/>
            <Titulo texto="Nossos Recursos" legenda="In fermentum ex quis sem cursus, vitae porta est cursus." className="mb-7"/>
            <Recursos/>
        </div>
    )
}