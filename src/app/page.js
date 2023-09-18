'use client'
import { useState } from "react";//importação
import Link from "next/link";
import handlerAcessUser from "./functions/handlerAcess"
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import styles from "./login.css";
import Image from "next/image";

export default function Login() {//define uma função chamada login
  const [user, setUser] = useState({//essa linha utiliza o hook useState do React para definir o estado do componente Login.
    email: '',
    password: '',
  });
  const { push, refresh } = useRouter();
  //Push é uma função que permite a navegação programática em seu aplicativo Next.js.
  //Refresh é uma função que atualiza a página atual sem recarregá-la completamente.
  
  const handlerLogin = async (e) => {//função assincrona pq é marcada com o async.
    e.preventDefault();//evita o comportamento padrão do HTML
                      //Isso é importante porque você deseja controlar o processo de login de forma assíncrona sem uma recarga completa da página.
    try {
      const userAuth = await handlerAcessUser(user);
      if (userAuth.token === undefined){//verifica se o objeto "userAuth" retornado possui um token. Se a propriedade não tiver um token sera "undefined", significando que a autenticação não foi bem sucedida
        toast.error("Erro no e-mail ou senha!")//se a propriedade "userAuth" for undifined o codigo chama a função "toast.error" para exibir a mensagem de erro
      }
      push('/pages/dashboard');//Se a chamada para handlerAcessUser for bem-sucedida (ou seja, o login for bem-sucedido), o código dentro do try é executado, e push('/pages/dashboard') é chamado.
    } catch {//se ocorrer algum erro durante o processo de login (por exemplo, credenciais inválidas), o código dentro do bloco catch é executado, e refresh() é chamado.
        refresh()
      }
  }
  return (//retorna 
    <div id="Login" className={styles.login}>

<div className="Links">
       <Link id="login" href={"/"}>Login</Link>   
       <Link id="register" href={"/pages/dashboard/registra"}>Registrar</Link>
       <Link id="alter" href={"/pages/dashboard/altera"}>Alterar</Link>
</div>
      
      <form onSubmit={handlerLogin}>{/*quando o usuário envia o formulário 
      (por exemplo, ao pressionar Enter após preencher os campos de email e senha e clicar
       em um botão "Entrar"), a função handlerLogin será chamada para lidar com a submissão.*/}
        <input
          className="inputLogin"
          type="email"
          onChange={(e) => { setUser({ ...user, email: e.target.value }) }}>{/*função de retorno de chamada (callback) que será executada quando o evento onChange ocorrer.
         Criando um novo objeto que contem todas as propriedades*/}
        </input>
        <span>Email</span>


        <input
          className="inputLogin"
          type='password'
          onChange={(e) => { setUser({ ...user, password: e.target.value }) }}>
        </input>
        <span>Senha</span>

        <h1 className="smile">😺💻</h1>

        <button id="buttonLogin">Entrar</button>
       
        </form>
      <ToastContainer/>{/*chamando a importação*/}
    </div>
  )
}
