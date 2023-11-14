'use client'
import { useState } from "react";//importações
import { useRouter } from 'next/navigation';
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import handlerAcessUser from "@/app/functions/handlerAcess";
import styles from "./register.css";
import { resolve } from "styled-jsx/css";
import { postUser } from "@/app/functions/handlerAcessAPI";

export default function RegistrarUsers(){
        const [user, setUser] = useState({
            name: '',
            password: '',
            email: ''
            });
            
            const { push } = useRouter();

            const register = async (event) => {
                event.preventDefault();
            try{
                await postUser(user);
                await new Promise((resolve) => {
                    toast.success("Usuário registrado com sucesso!");
                    setTimeout(resolve, 5000);
                });
                return push("/pages/dashboard");
            } catch {
                return toast.error("Erro")
            } 
    };

    return(//retorna um HTML
        <div className={styles.register}>

           

<div className="Links">
       <Link id="login" href={"/pages/dashboard"}>↩Home</Link>   
       <Link id="register" href={"/pages/dashboard/registra"}>Registrar</Link>
       <Link id="alter" href={"/pages/dashboard/altera"}>Alterar</Link>
</div>

<h2>Registrar Usuário</h2>

            <form className="formRegis" onSubmit={register}>
                
                
                    <input id="inputRegis" placeholder="Digite seu nome" type="text" name="name" required value={user.name}//nome que foi colocado no user
                    onChange={e => setUser({...user, name: e.target.value})}/>{/*onChange aciona um valor de entrada (como um campo de texto)
                             é uma função de retorno chamado (callback) q é executada quando o onChange ocorre*/}
                             <span>Nome</span>
               

                <input id="inputRegis" placeholder="Digite seu email" type="email" name="name" required value={user.email}//email que foi colocado no user
                    onChange={e => setUser({...user, email: e.target.value})}/>
                    <span>Email</span>

               
                <input id="inputRegis" placeholder="Digite sua senha" type="password" name="password" required value={user.password}//password que foi colocado no user
                    onChange={e => setUser({...user, password: e.target.value})}/>
               <span>Senha</span>

               <h1 className="RegisMoji">🐧➕</h1>
                <button className="buttonRegis" type="submit">Registrar</button>
                <br/>
            </form>
        
            <ToastContainer/>
        </div>
    )
}