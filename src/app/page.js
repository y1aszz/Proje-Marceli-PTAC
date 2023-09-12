'use client'
import { useState } from "react";//importação
import handlerAcessUser from "./functions/handlerAcess"
import { useRouter } from "next/navigation";

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
      await handlerAcessUser(user);//essa função lida com a tentativa de login do usuário. 
      push('/pages/dashboard');//Se a chamada para handlerAcessUser for bem-sucedida (ou seja, o login for bem-sucedido), o código dentro do try é executado, e push('/pages/dashboard') é chamado.
      //try-catch é usado para lidar com possíveis erros que podem ocorrer durante o processo de login.
    } catch {//se ocorrer algum erro durante o processo de login (por exemplo, credenciais inválidas), o código dentro do bloco catch é executado, e refresh() é chamado.
      refresh();//é usado para atualizar a página atual
    }
  }
  return (//retorna 
    <div>
      <h1>Login</h1>
      <form onSubmit={handlerLogin}>{/*quando o usuário envia o formulário 
      (por exemplo, ao pressionar Enter após preencher os campos de email e senha e clicar
       em um botão "Entrar"), a função handlerLogin será chamada para lidar com a submissão.*/}
        <input
          placeholder='E-mail'
          type="email"
          onChange={(e) => { setUser({ ...user, email: e.target.value }) }}>{/*função de retorno de chamada (callback) que será executada quando o evento onChange ocorrer.
         Criando um novo objeto que contem todas as propriedades*/}
        </input>
        <input
          placeholder='Senha'
          type='password'
          onChange={(e) => { setUser({ ...user, password: e.target.value }) }}>
        </input>
        <button>Entrar</button>
      </form>
    </div>
  )
}
