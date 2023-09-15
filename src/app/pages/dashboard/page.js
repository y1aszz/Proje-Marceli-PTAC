import { getUsers } from "@/app/functions/handlerAcessAPI";//importação
import List from '@/app/components/List';
import { Suspense } from "react";

export default async function Dashboard() {
   const users = getUsers();//retorna a lista de usuarios estabelecida no handlerAcessAPI
    return (
        <div>
            <h1>Dashboard</h1>
            <Suspense fallback={<p>Loading...</p>}>
                <List users={users}/>
            </Suspense>
        </div>
    );
};