'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import handlerAcessUser from "@/app/functions/handlerAcess";

export default function AlteraUsuario(){
    const router = useRouter();
    const [nameAltera, setNameAltera] = useState("");
    const [emailAltera, setEmailAltera] = useState("");
    const [passwordAltera, setPasswordAltera] = useState("");

    const alterar = async (e) => {
        e.preventDefault()

        const user = {
            nameAltera: nameAltera,
            emailAltera: emailAltera,
            passwordAltera: passwordAltera
        }

        try{
            const userAuth = await handlerAcessUser(user);
            if(userAuth.token ===undefined){
                toast.success("Usuário alterado com sucesso")
            }
        } catch{}
    }

    return(
        <div className="container">
            <h2 className="h2Altera">Alteração de Usuarios</h2>

            <form className="formAlter" onSubmit={alterar}>
                <div className="name">
                    <input id="nameAlter" placeholder="Digite o nome do usuario" type="text" name="name" value={nameAltera}
                    onChange={e => setNameAltera(e.target.value)}></input>
                </div>

                <div className="email">
                    <input id="emailAlter" placeholder="Digite o email do usuario" type="email" name="email" value={emailAltera}
                    onChange={e => setEmailAltera(e.target.value)}></input>
                </div>

                <div className="password">
                    <input id="passwordAlter" placeholder="Digite a senha do usuario" type="text" name="password" value={passwordAltera}
                    onChange={e => setPasswordAltera(e.target.value)}></input>
                </div>
                
                <div className="submit">
                    <button id="buttonAlter" type="submit">Atualizar</button>
                </div>
                <br/>
                <Link href={"/"}>Sair</Link>
            </form>
            <ToastContainer/>
        </div>
    )
}