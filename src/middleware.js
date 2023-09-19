'use server'
import { NextResponse } from "next/server";//importação
import { validateToken } from "./app/functions/validateToken";
import Link from "next/link";

export const middleware = (request) => {//obtem o token do cookie, se existir

    const token = request.cookies.get('token')?.value;//cria uma instancia da URL da requisição
    const urlLogin = new URL('/', request.url);//valida token
    const isTokenValidated = validateToken(token);//verifica se o token n é valido ou se esta ausente
    const urlDashboard = new URL('/pages/dashboard', request.url)

    if (!isTokenValidated || ! token){
        if (request.nextUrl.pathname === '/pages/dashboard'
        || request.nextUrl.pathname === '/pages/dashboard/registra'
        || request.nextUrl.pathname === '/pages/dashboard/altera'){
            return NextResponse.redirect(urlLogin);
        }
    }
    if (isTokenValidated){
        if (request.nextUrl.pathname === '/'){
            return NextResponse.redirect(urlDashboard);
        }
    }
    NextResponse.next();
};

export const config ={
    matcher: ['/', '/pages/dashboard/:path*']
};


