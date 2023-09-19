'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import handlerAcessUser from "@/app/functions/handlerAcess";
import styles from "./alter.css";

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
        } catch{
            toast.error("Erro na aplicação");
        }
    }

    return(
        <div className={styles.alter}>

<div className="Links">
       <Link id="login" href={"/pages/dashboard"}>↩Home</Link>   
       <Link id="register" href={"/pages/dashboard/registra"}>Registrar</Link>
       <Link id="alter" href={"/pages/dashboard/altera"}>Alterar</Link>
</div>

            <h2 className="h2Altera">Alterar Usuário</h2>

            <form className="formAlter" onSubmit={alterar}>
                
                    <input id="inputAlter" placeholder="Digite o nome do usuario" type="text" name="name" required value={nameAltera}
                    onChange={e => setNameAltera(e.target.value)}></input>
                <span>Nome</span>

               
                    <input id="inputAlter" placeholder="Digite o email do usuario" type="email" name="email" required value={emailAltera}
                    onChange={e => setEmailAltera(e.target.value)}></input>
               <span>Email</span>

              
                    <input id="inputAlter" placeholder="Digite a senha do usuario" type="text" name="password" required value={passwordAltera}
                    onChange={e => setPasswordAltera(e.target.value)}></input>
                <span>Senha</span>
                

                <h1 className="AlterEmo">🤹👩‍⚖️</h1>
                <div className="submit">
                    <button id="buttonAlter" type="submit">Atualizar</button>
                </div>
                <br/>
            </form>
            <ToastContainer/>
        </div>
    )
}