import Recurso from "./Recurso";

export default function Recursos() {
    return (
        <div className="grid grid-cols-3 gap-5">
            <Recurso
                titulo="300x mais rápido"
                descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum ex quis sem cursus, vitae porta est cursus."
                imagem="https://source.unsplash.com/featured/250x300?black,white,abstract"
            />
            <Recurso
                titulo="Vanguarda em tecnologia"
                descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum ex quis sem cursus, vitae porta est cursus."
                imagem="https://source.unsplash.com/featured/250x301?black,white,abstract"
            />
            <Recurso
                titulo="suporte 24/7"
                descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum ex quis sem cursus, vitae porta est cursus."
                imagem="https://source.unsplash.com/featured/250x302?black,white,abstract"
            />
            <Recurso
                titulo="Web Design Responsivo"
                descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum ex quis sem cursus, vitae porta est cursus."
                imagem="https://source.unsplash.com/featured/250x303?black,white,abstract"
            />
            <Recurso
                titulo="SEO Otimizado"
                descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum ex quis sem cursus, vitae porta est cursus."
                imagem="https://source.unsplash.com/featured/250x304?black,white,abstract"
            />
            <Recurso
                titulo="Yada yada yada"
                descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum ex quis sem cursus, vitae porta est cursus."
                imagem="https://source.unsplash.com/featured/250x306?black,white,abstract"
            />
        </div>
    )
}