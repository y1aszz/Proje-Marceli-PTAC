import Cookies from "js-cookie";//importações
import { validateToken } from "./validateToken";
import { getUserAuthenticated } from "./handlerAcessAPI";

const handlerAcessUser = async (user) => {//async função assincrona, o user é um parametro da função, a função espera para receber o objeto 'user'

    const userAuth = await getUserAuthenticated(user);//await é para esperar a conclusão de uma operação. Chama a função getUser e passa o objeto user
    
    const isTokenValidate = validateToken(userAuth.token);//valideToken passa o token obtido da autenticação

    if (isTokenValidate) {
       Cookies.set('token', userAuth.token, {expires:1}) && localStorage.setItem('name', JSON.stringify(userAuth.name))
    }
    return userAuth;
}
export default handlerAcessUser;

