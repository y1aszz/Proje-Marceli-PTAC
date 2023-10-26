import { getUsers } from "../functions/handlerAcessAPI";

export default async function List(){
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const users = await getUsers();
    return(
        <div>
            <h3>Lista de Usuários Cadastrados</h3>
            <ul>
                {users?.map((user, index) => (
                    <li key={index}>{user.name}, {user.email}</li>
                ))}
            </ul>
        </div>
    )
}
