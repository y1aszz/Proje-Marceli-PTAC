
import { getUsers } from "@/app/functions/handlerAcessAPI";//importação
import List from '@/app/components/List';
import { Suspense } from "react";
import Link from "next/link";
import "@/globinho.css";



export default async function Dashboard() {
   const users = await getUsers();//retorna a lista de usuarios estabelecida no handlerAcessAPI
    return (
<div>
<div className="Links">
       <Link id="login" href={"/pages/dashboard/"}>↩Home</Link>   
       <Link id="register" href={"/pages/dashboard/registra"}>Registrar</Link>
</div>
<div className="bobao">
<Suspense fallback={<p>Loading...</p>}>
    <List id="logincss" users={users}/>
</Suspense>
</div>      
</div>
    );
};