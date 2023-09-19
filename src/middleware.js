'use server'
import { NextResponse } from "next/server";//importação
import { validateToken } from "./app/functions/validateToken";

export const middleware = (request) => {//obtem o token do cookie, se existir

    const token = request.cookies.get('token')?.value;//cria uma instancia da URL da requisição
    const urlLogin = new URL('/', request.url);//valida token
    const isTokenValidated = validateToken(token);//verifica se o token n é valido ou se esta ausente
    const urlDashboard = new URL ('/pages/dashboard', request.url);

    if (!isTokenValidated || !token) {//verifica se a proxima URL (request.nextUrl) é /pages/dashboard'
        if (request.nextUrl.pathname === '/pages/dashboard') {//redireciona para a URL de login
            return NextResponse.redirect(urlLogin);
        }

        if (isTokenValidated){
            if (request.nextUrl.pathname === '/'){
                return NextResponse.redirect(urlDashboard);
            }
        }

        if (!isTokenValidated || !token){//consiste em duas partes separadas pelo & 
            if (request.nextUrl.pathname === '/pages/dashboard/altera'){
            return NextResponse.redirect(urlLogin);
        }
        }         
    
        if (!isTokenValidated || !token){//consiste em duas partes separadas pelo & 
            if (request.nextUrl.pathname === '/pages/dashboard/registra'){
            return NextResponse.redirect(urlLogin);
        }
        }  

    }
    NextResponse.next();//é chamada a função NextResponse.next() para continuar o fluxo normal de execução, permitindo que a aplicação siga para o próximo middleware ou rota.
};
export const config = {//objeto que esta sendo exportado
    matcher: ['/', '/pages/dashboard/', '/pages/dashboard/registra', '/pages/dashboard/altera' ]//configura o matcher para corresponder às rotas '/' (raiz) e '/pages/dashboard'.
};
