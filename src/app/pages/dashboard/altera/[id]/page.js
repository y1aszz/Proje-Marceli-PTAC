'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import handlerAcessUser from "@/app/functions/handlerAcess";
import styles from "../alter.css";
import { updateUser } from "@/app/functions/handlerAcessAPI";

export default function AlteraUsuario({params}){
    
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        });
        
        const { push } = useRouter();

        const alterar = async (event) => {
            event.preventDefault();
        try{
            await updateUser(user, params.id);
            await new Promise((resolve) => {
                toast.success("Usuário alterado com sucesso!");
                setTimeout(resolve, 5000);
            });
            return push("/pages/dashboard");
        } catch {
            return toast.error("Erro")
        } 
};
    return(
        <div className={styles.alter}>

<div className="Links">
       <Link id="login" href={"/pages/dashboard"}>↩Home</Link>   
</div>

            <h2 className="h2Altera">Alterar Usuário</h2>

            <form className="formAlter" onSubmit={alterar}>
                
                    <input id="inputAlter" placeholder="Digite o nome do usuario" type="text" name="name" required value={user.name}
                    onChange={(e) => {setUser({...user, name: e.target.value})}}></input>
                    <span>Nome</span>

               
                    <input id="inputAlter" placeholder="Digite o email do usuario" type="email" name="email" required value={user.email}
                     onChange={(e) => {setUser({...user, email: e.target.value})}}></input>
                    <span>Email</span>

              
                    <input id="inputAlter" placeholder="Digite a senha do usuario" type="text" name="password" required value={user.password}
                     onChange={(e) => {setUser({...user, password: e.target.value})}}></input>
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