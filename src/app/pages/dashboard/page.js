
import { getUsers } from "@/app/functions/handlerAcessAPI";//importação
import List from '@/app/components/List';
import { Suspense } from "react";
import Link from "next/link";



export default async function Dashboard() {
   const users = getUsers();//retorna a lista de usuarios estabelecida no handlerAcessAPI
    return (
      <div>
            
<div className="Links">
      <Link id="login" href={"/"}>↩Sair</Link>   
       <Link id="register" href={"/pages/dashboard/registra"}>Registrar</Link>
       <Link id="alter" href={"/pages/dashboard/altera"}>Alterar</Link>
</div>

            <Suspense fallback={<p>Loading...</p>}>
                <List users={users}/>
            </Suspense>
           
            </div>
    );
};