import { IconMenu2 } from "@tabler/icons-react";
import MenuUsuario from "./MenuUsuario";

export default function() {
    return (
        <header className="
            flex h-20 items-center px-7 
            justify-between bg-zinc-950
        ">
            <IconMenu2 className="text-zinc-400 hover:text-zinc-200 cursor-pointer"/>
            <MenuUsuario nome="Usuário mock" email="usuario@zmail.com" imagem="https://source.unsplash.com/featured/150x150?person" />
        </header>
    )
}