import { resolve } from "styled-jsx/css";

export default async function List({users}){
    await new Promise((resolve) => setTimeout(resolve, 3000));
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
