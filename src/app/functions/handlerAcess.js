import Cookies from "js-cookie";//importações
import { validateToken } from "./validateToken";
import { getUserAuthenticated } from "./handlerAcessAPI";

const handlerAcessUser = async (user) => {//async função assincrona, o user é um parametro da função, a função espera para receber o objeto 'user'

    const userAuth = await getUserAuthenticated(user);//await é para esperar a conclusão de uma operação. Chama a função getUser e passa o objeto user
    
    const isTokenValidate = validateToken(userAuth.token);//valideToken passa o token obtido da autenticação

    if (isTokenValidate) {//inicia uma verificação se a variável isTokenVali é verdadeira. Se for true, o código dentro será executado; caso contrário, será ignorado.
        Cookies.set('token', userAuth.token, { expires: 1 });//esta configurando um cookie chamado token. O expires: 1 configura o cookie para expirar após 1 dia
        localStorage.setItem('name', userAuth.name);//userAuth armazena o nome do usuário. localStorange permite que acesse o nome do usuario sem solicitação de rede   
        return getUserAuthenticated//retorna a função getUser
    }
}
export default handlerAcessUser;

