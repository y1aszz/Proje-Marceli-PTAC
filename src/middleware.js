'use server'
import { NextResponse } from "next/server";//importação
import { validateToken } from "./app/functions/validateToken";
import Link from "next/link";

export const middleware = (request) => {//obtem o token do cookie, se existir

    const token = request.cookies.get('token')?.value;//cria uma instancia da URL da requisição
    const urlLogin = new URL('/', request.url);//valida token
    const isTokenValidated = validateToken(token);//verifica se o token n é valido ou se esta ausente



    
    if (!isTokenValidated || !token) {//verifica se a proxima URL (request.nextUrl) é /pages/dashboard'
        if (request.nextUrl.pathname === '/pages/dashboard') {//redireciona para a URL de login
            return NextResponse.redirect(urlLogin);
        }
        if (request.nextUrl.pathname === '/' && token){//consiste em duas partes separadas pelo & 
            return NextResponse.redirect('/pages/dashboard');
        }          //request.nextUrl.pathname === '/': Isso verifica se o pathname da URL de requisição (request.nextUrl.pathname) é igual a '/'.
                                               //token está definida e é avaliada como verdadeira.
        if(request.nextUrl.pathname === 'pages/dashboard/registra' || request.nextUrl.pathname === '/pages/dashboard/altera' && !isTokenValidated){
            return NextResponse.redirect(urlLogin);
        }
        if (isTokenValidated){
            return NextResponse.next();
        }
    }


    
    NextResponse.next();//é chamada a função NextResponse.next() para continuar o fluxo normal de execução, permitindo que a aplicação siga para o próximo middleware ou rota.



};


export const config = {//objeto que esta sendo exportado
    matcher: ['/', '/pages/dashboard']//configura o matcher para corresponder às rotas '/' (raiz) e '/pages/dashboard'.


};

