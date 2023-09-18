'use client'
import { useState } from "react";//importação
import Link from "next/link";
import handlerAcessUser from "./functions/handlerAcess"
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import styles from "./login.css";

export default function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { push } = useRouter();


  const handlerLogin = async (e) => {
    e.preventDefault();
                      
    try {
      const userAuth = await handlerAcessUser(user);
      if (userAuth.token === undefined){
        toast.error("Erro no e-mail ou senha!")
      }
      push('/pages/dashboard');
    } catch {
        toast.error("Erro na aplicação");
      }
  }
  return (//retorna 
    <div id="Login" className={styles.login}>
      
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

        <h1 className="smile">💻🐙</h1>

        <button id="buttonLogin">Entrar</button>
       
        </form>
      <ToastContainer/>{/*chamando a importação*/}
    </div>
  )
}
