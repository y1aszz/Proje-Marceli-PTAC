import Link from "next/link";
import { getUsers } from "../functions/handlerAcessAPI";

export default async function List(){
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const users = await getUsers();
    return(
        <div>
            <h3>Lista de Usuários Cadastrados</h3>
            <ul>
                {users?.map((user, index) => (
                  
                    <Link href={`/pages/dashboard/altera/${user.id}`}><li key={index}>{user.name}, {user.email}</li></Link>
                ))}
            </ul>
        </div>
    )
}
