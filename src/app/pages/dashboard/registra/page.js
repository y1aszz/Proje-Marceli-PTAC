'use client'
import { useState } from "react";//importações
import { useRouter } from 'next/navigation';
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import handlerAcessUser from "@/app/functions/handlerAcess";
import styles from "./register.css";

export default function RegistrarUsers(){
    const router = useRouter();//cria uma variavel chamada router que armazena uma instancia do roteador Next.js
    const [name, setName] = useState ("");// Isso representa o estado do campo de nome no formulário de registro. O valor inicial é definido como uma string vazia, "".
    const [password, setPassword] = useState ("");//o mesmo serve para o password e email 
    const [email, setEmail] = useState("");

    const { push, refresh } = useRouter();

    const register = async (e) => {// (e) é um parametro da função que representa um evento
        e.preventDefault()//método que impede o comportamento padrão do evento.
        
        const user = {//cria um objeto chamado user
            name: name,
            password: password,
            email: email
        }

        try{
            const userAuth = await handlerAcessUser(user);
            if(userAuth.token === undefined){
                toast.success("Usuário registrado com sucesso")
            }
            
        }  catch{}
        
    }

    return(//retorna um HTML
        <div className={styles.register}>


<div className="Links">
       <Link id="login" href={"/"}>Login</Link>   
       <Link id="register" href={"/pages/dashboard/registra"}>Registrar</Link>
       <Link id="alter" href={"/pages/dashboard/altera"}>Alterar</Link>
</div>
            
            <form className="formRegis" onSubmit={register}>
                
                <div className="name">
                    <input id="nomeRegis" placeholder="Digite seu nome" type="text" name="name" value={name}//nome que foi colocado no user
                    onChange={e => setName(e.target.value)}/>{/*onChange aciona um valor de entrada (como um campo de texto)
                             é uma função de retorno chamado (callback) q é executada quando o onChange ocorre*/}
                </div>

                <div className="email">
                <input id="emailRegis" placeholder="Digite seu email" type="email" name="name" value={email}//email que foi colocado no user
                    onChange={e => setEmail(e.target.value)}/>
                </div>

                <div className="password">
                <input id="passwordRegis" placeholder="Digite sua senha" type="password" name="password" value={password}//password que foi colocado no user
                    onChange={e => setPassword(e.target.value)}/>
                </div>

                <button className="buttonRegis" type="submit">Registrar</button>
                <br/>
                <Link href={"/"}>Sair</Link>
            </form>
            <ToastContainer/>
        </div>
    )
}