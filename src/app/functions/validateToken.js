import { decode } from "jsonwebtoken";//importação

const validateToken = (token)=>{//usada para validar o token JWT fornecido.
    const isTokenValidate = decode(token);//Dentro da função, a linha acima chama a função decode da biblioteca jsonwebtoken para tentar decodificar o token JWT. O resultado da decodificação é armazenado na variável 
    if(isTokenValidate){
        return token= true//se for true (verdadeira) indica que o token passou na validação
    }
    return token=false;//se for false (falsa) indica que o token falhou
}   
export {validateToken};